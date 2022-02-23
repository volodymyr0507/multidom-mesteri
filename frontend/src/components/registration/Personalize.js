import LoadingButton from "@mui/lab/LoadingButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { updateProfile } from "api/auth";
import useFormikValidation from "hooks/useFormikValidation";
import React, { useRef, useState } from "react";
import * as yup from "yup";
import { getUploadedFileValue } from "../../util/functions";

const price_estimations = [false, true];
const cleanings = [false, true];
const experiences = [1, 2, 3, 4, 5, 6, 7, 8];
const team_sizes = ["1-3", "3+"];

const Label = styled(FormLabel)(() => ({
  marginBottom: 3,
}));

const Personalize = function (props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [priceEstimationError, setPriceEstimationError] = useState("");
  const [cleaningError, setCleaningError] = useState("");
  const ref = useRef();
  const [image, setImage] = useState(null);

  const validationSchema = yup.object().shape({
    experience: yup
      .number()
      .oneOf([...experiences])
      .required("Experience is required"),
    price_estimate: yup.boolean().nullable(),
    cleaning: yup.boolean().nullable(),
    team_size: yup
      .string()
      .oneOf([...team_sizes])
      .required("Team size is required"),
  });
  const profile = props.profile;
  const formik = useFormikValidation({
    initialValues: {
      experience: profile.experience || "",
      price_estimate: profile.price_estimate,
      cleaning: profile.cleaning,
      team_size: profile.team_size,
    },
    onSubmit: async (values) => {
      let valid = true;
      if (values.price_estimate == null) {
        valid = false;
        setPriceEstimationError("Price estimation is required");
      }

      if (values.cleaning == null) {
        valid = false;
        setCleaningError("Cleaning is required");
      }
      if (!valid) return;
      setIsSubmitting(true);
      const profile_picture = image ? await getUploadedFileValue(image) : image;

      updateProfile(props.userId, { ...values, profile_picture })
        .then(({ data }) => {
          props.nextStep();
        })
        .catch(({ response }) => {})
        .finally(() => {
          setCleaningError("");
          setPriceEstimationError("");
          setIsSubmitting(false);
        });
    },
    validationSchema,
  });

  const handleSkip = () => {
    props.nextStep();
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const [file] = files;
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const { getFieldProps, handleSubmit } = formik;
  return (
    <Stack>
      <Typography variant="h6">Personalize</Typography>
      <form onSubmit={handleSubmit}>
        <Stack
          sx={{ marginTop: 2, justifyContent: "space-around" }}
          direction="row">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Label sx={{ marginBottom: 1 }}>Avatar</Label>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={image || profile.profile_picture}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextField
              ref={ref}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {/* <Button variant="outlined">Upload Photo</Button> */}
            <Button sx={{ marginTop: 1 }} onClick={handleRemoveImage}>
              Remove
            </Button>
          </Box>
        </Stack>
        <Stack spacing={2}>
          <FormControl>
            <Label>Experience</Label>
            <Select {...getFieldProps("experience")}>
              {experiences.map((experience) => (
                <MenuItem value={experience}>
                  {experience} {experience == "1" && " Year"}{" "}
                  {experience != "1" && " Years"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Label>Price for estimation</Label>

            <RadioGroup {...getFieldProps("price_estimate", true)} row>
              {price_estimations.map((price_estimate) => (
                <FormControlLabel
                  key={price_estimate}
                  value={price_estimate}
                  control={<Radio />}
                  label={price_estimate ? "Yes" : "No"}
                  sx={{ flex: 1 }}
                />
              ))}
            </RadioGroup>
            <Box>
              <Typography variant="caption" color="error">
                {priceEstimationError}
              </Typography>
            </Box>
          </FormControl>
          <FormControl>
            <Label>Cleaning</Label>
            <RadioGroup {...getFieldProps("cleaning", true)} row>
              {cleanings.map((cleaning) => (
                <FormControlLabel
                  key={cleaning}
                  value={cleaning}
                  control={<Radio />}
                  label={cleaning ? "Yes" : "No"}
                  sx={{ flex: 1 }}
                />
              ))}
            </RadioGroup>
            <Box>
              <Typography variant="caption" color="error">
                {cleaningError}
              </Typography>
            </Box>
          </FormControl>
          <FormControl>
            <Label>Team size</Label>
            <Select {...getFieldProps("team_size")}>
              {team_sizes.map((team_size) => (
                <MenuItem value={team_size}>{team_size} People</MenuItem>
              ))}
            </Select>
          </FormControl>
          <LoadingButton
            loading={isSubmitting}
            variant="contained"
            size="large"
            type="submit">
            Finish
          </LoadingButton>
          <Button onClick={handleSkip}>Skip</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Personalize;

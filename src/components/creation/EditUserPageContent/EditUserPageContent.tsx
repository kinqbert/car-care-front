import { useEffect, useState } from "react";
import { Button } from "../../common/Button";

import styles from "./styles.module.scss";
import { Input } from "../../common/Input";
import { imageExists } from "../../../utils/imageExists";
import { getCurrentUser, updateUser } from "../../../api/user";
import { UserUpdateData } from "../../../types/User";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

export const EditUserPageContent = () => {
  const navigate = useNavigate();

  const setUserPartial = useUserStore((state) => state.setUserPartial);

  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState("");

  const [surnameValue, setSurnameValue] = useState("");
  const [surnameError, setSurnameError] = useState("");

  const [licenseNumberValue, setLicenseNumberValue] = useState("");
  const [licenseNumberError, setLicenseNumberError] = useState("");

  const [avatarUrlValue, setAvatarUrlValue] = useState("");
  const [avatarUrlError, setAvatarUrlError] = useState("");

  useEffect(() => {
    getCurrentUser().then((response) => {
      setNameValue(response.name);
      setSurnameValue(response.surname);
      setLicenseNumberValue(response.licenseNumber);
      setAvatarUrlValue(response.avatarUrl);
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isError = false;

    setNameError("");
    setSurnameError("");
    setLicenseNumberError("");
    setAvatarUrlError("");

    if (!nameValue.trim()) {
      setNameError("Name is required");
      isError = true;
    }

    if (!surnameValue.trim()) {
      setSurnameError("Surname is required");
      isError = true;
    }

    if (!licenseNumberValue.trim()) {
      setLicenseNumberError("License number is required");
      isError = true;
    }

    if (licenseNumberValue.length !== 8) {
      setLicenseNumberError("License number must be 8 characters long");
      isError = true;
    }

    const numbers = /^[0-9]+$/;

    if (!licenseNumberValue.match(numbers)) {
      setLicenseNumberError("License number must contain only numbers");
      isError = true;
    }

    if (!avatarUrlValue.trim()) {
      setAvatarUrlError("Image link is required");
      isError = true;
    }

    const imageIsValid = await imageExists(avatarUrlValue);

    if (!!avatarUrlValue.trim()) {
      if (!imageIsValid) {
        setAvatarUrlError("Image does not exist");
        isError = true;
      }
    }

    if (isError) {
      return;
    }

    const updateUserData: UserUpdateData = {
      name: nameValue,
      surname: surnameValue,
      licenseNumber: licenseNumberValue,
      avatarUrl: avatarUrlValue,
    };

    updateUser(updateUserData).then((response) => {
      alert("User data updated successfully");

      setUserPartial(response);

      navigate("/garage");
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Edit user data</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        <Input
          label="Name"
          value={nameValue}
          onChange={setNameValue}
          error={nameError}
        />
        <Input
          label="Surname"
          value={surnameValue}
          onChange={setSurnameValue}
          error={surnameError}
        />
        <Input
          label="License number"
          value={licenseNumberValue}
          onChange={setLicenseNumberValue}
          error={licenseNumberError}
        />
        <Input
          label="Avatar URL"
          value={avatarUrlValue}
          onChange={setAvatarUrlValue}
          error={avatarUrlError}
        />
        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
};

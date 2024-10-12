import { PhoneNumberUtil } from "google-libphonenumber";
import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string): boolean => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    console.log(error, "error");
    return false;
  }
};

interface PhoneNumberInputProps {
  getPhoneNumber: (data: string) => void;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  getPhoneNumber,
}) => {
  const [phone, setPhone] = useState<string>("");
  const [dialCode, setDialCode] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(true);

  // by default phone can be (+dialCode) phone number or (dialCode) phone number
  useEffect(() => {
    if (!!phone && phone.length > dialCode.length + 1) {
      const isValid = isPhoneValid(phone);
      setIsValidNumber(isValid);
    }
  }, [phone, dialCode]);

  useEffect(() => {
    if (phone && isValidNumber) {
      getPhoneNumber(phone);
    }
  }, [phone, isValidNumber]);

  return (
    <div>
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone, { country }) => {
          setPhone(phone);
          setDialCode(country.dialCode);
        }}
        className="text-[1rem] w-full bg-[#FBFAF8] rounded-sm outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
        inputStyle={{
          width: "100%",
          background: "#FBFAF8",
        }}
        countrySelectorStyleProps={{
          className: "h-full bg-[#FBFAF8]",
        }}
        dialCodePreviewStyleProps={{
          className: "h-full bg-[#FBFAF8]",
        }}
      />

      {!isValidNumber && (
        <div style={{ color: "red", marginBlockStart: "4px" }}>
          Phone is not valid
        </div>
      )}
    </div>
  );
};

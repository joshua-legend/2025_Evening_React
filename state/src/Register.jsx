import { useState } from "react";
import Text from "./Text";
import Input from "./Input";
const Register = () => {
  const [value, setValue] = useState("");
  const validLength = (value) => 4 <= value.length && value.length <= 12;
  const validSpecial = (value) => [..."!#@&*"].some((v) => value.includes(v));
  const validHasNum = (value) => [..."01234567989"].some((v) => value.includes(v));
  return (
    <>
      <Input func={setValue} />
      <Text text={"글자 길이: 4~12"} valid={validLength(value)} />
      <Text text={"글자에 !,#,@,&,* 중 하나 반드시 포함"} valid={validSpecial(value)} />
      <Text text={"글자에 반드시 숫자 포함!"} valid={validHasNum(value)} />
    </>
  );
};

export default Register;

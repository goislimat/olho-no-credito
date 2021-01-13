import styled from "styled-components";
import { Label } from "ui";
import { colors } from "ui/theme";

const SelectContainer = styled.div`
  position: relative;

  ::after {
    content: "";
    display: inline-block;
    height: 0px;
    width: 0px;
    border: 6px solid white;
    border-top: 6px solid #444;

    position: absolute;
    right: 20px;
    top: 25px;
  }
`;

const CustomSelect = styled.select`
  display: block;
  padding: 20px;
  width: 100%;
  border-radius: 6px;
  appearance: none;
`;

interface Props {
  values: { value: any; text: string }[];
  placeholder?: string;
  label?: string;
  [propName: string]: any;
}

function Select({ values, placeholder, label, ...props }: Props) {
  function renderSelect() {
    return (
      <SelectContainer>
        <CustomSelect {...props}>
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {values.map(function ({ value, text }) {
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
        </CustomSelect>
      </SelectContainer>
    );
  }

  if (label) {
    return (
      <Label id={props.id} label={label}>
        {renderSelect()}
      </Label>
    );
  }

  return renderSelect();
}

export default Select;

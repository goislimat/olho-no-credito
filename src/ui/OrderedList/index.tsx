import { Fragment } from "react";
import styled from "styled-components";
import { breakpoints, colors, typography } from "ui/theme";

const List = styled.ol`
  padding: 38px 32px 48px;

  ${breakpoints.desktop} {
    display: grid;
    align-content: center;
    margin: 80px 20px 80px 0;
    min-width: 50%;
  }
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 22px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

const Index = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.blue600};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-family: ${typography.inter};
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 14px;

  ${breakpoints.desktop} {
    margin: 0;
  }
`;

const Info = styled.p`
  text-align: center;
  color: ${colors.gray};
  font-size: 12px;
  line-height: 14px;

  ${breakpoints.desktop} {
    text-align: left;
    font-size: 18px;
    line-height: 25px;
  }
`;

interface Props {
  items: string[];
}

function OrderedList({ items }: Props) {
  return (
    <List>
      {items.map(function (item, index) {
        return (
          <Item key={item}>
            <Index>{index + 1}</Index>
            <Info>{item}</Info>
          </Item>
        );
      })}
    </List>
  );
}

export default OrderedList;

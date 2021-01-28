import styled, { css } from "styled-components";
import { v4 as uuid } from "uuid";
import { breakpoints, typography } from "ui/theme";
import { ReactNode } from "react";

const Content = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: grid;
    background: white;
    box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 40px 32px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const ColumnHeader = styled.th<{ minimalist?: boolean }>`
  ${({ minimalist }) => {
    return css`
      background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
      padding: 12px;
      border-radius: 15px 15px 0 0;
      border: 2px solid white;

      font-family: ${typography.inter};
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      color: white;

      ${minimalist &&
      css`
        background: white;
        color: #707070;
        border: 0;
        border-bottom: 1px solid #e6e6e6;
      `}
    `;
  }}
`;

const TableRow = styled.tr<{ minimalist?: boolean }>`
  ${({ minimalist }) => css`
    border: 1px solid #e6e6e6;

    ${minimalist &&
    css`
      border: 0;
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
    `}
  `}
`;

const TableCell = styled.td<{ minimalist?: boolean }>`
  ${({ minimalist }) => css`
    background: #f7f7f7;
    padding: 16px 8px;

    font-family: ${typography.inter};
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    color: #838383;

    ${minimalist &&
    css`
      background: white;
    `}
  `}
`;

const TableLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;

  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #2721f3;
`;

interface Props {
  queries: {
    fields: {
      name?: string;
      type: "text" | "full-bottom-link" | "link";
      columnText?: string;
      mobile?: {
        columnName?: string;
        rowLabel: string;
      };
      desktop?: {
        columnName: string;
        rowLabel: string;
      };
    }[];
    data: {
      values: string[];
    }[];
  };
  minimalist?: boolean;
  header?: ReactNode;
  actions?: ReactNode;
}

function DesktopTable({ queries, minimalist, header, actions }: Props) {
  const { fields, data } = queries;

  return (
    <Content>
      {header}

      <Table>
        <thead>
          <tr>
            {fields.map(function (field) {
              const { name, type, desktop } = field;

              if (type === "full-bottom-link") {
                return (
                  <ColumnHeader
                    minimalist={minimalist}
                    key={desktop?.columnName}
                  >
                    {desktop?.columnName}
                  </ColumnHeader>
                );
              }

              return (
                <ColumnHeader minimalist={minimalist} key={name}>
                  {name}
                </ColumnHeader>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map(function (item) {
            const { values } = item;

            return (
              <TableRow minimalist={minimalist} key={uuid()}>
                {values.map(function (value, index) {
                  if (fields[index].type === "full-bottom-link") {
                    return (
                      <TableCell minimalist={minimalist} key={value}>
                        <TableLink href={value}>
                          {fields[index].desktop?.rowLabel}
                        </TableLink>
                      </TableCell>
                    );
                  }

                  if (fields[index].type === "link") {
                    return (
                      <TableCell minimalist={minimalist} key={value}>
                        <TableLink href={value}>
                          {fields[index].columnText}
                        </TableLink>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell minimalist={minimalist} key={value}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </Table>

      {actions}
    </Content>
  );
}

export default DesktopTable;

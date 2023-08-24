"use client";

import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// 获取token
const fetchToken = async () =>
  await fetch("/api/auth/token").then((res) => res.json());
/**
 * 患者就诊记录
 */
export const Records = () => {
  const [records, setRecords] = useState([]);

  // 从 grafbase 获取数据
  const fetchRecords = async () => {
    const { token } = await fetchToken();
    const url = process.env.NEXT_PUBLIC_GRAFBASE_API_URL;
    const bearerToken = `Bearer ${token}`;

    console.log(
      "🚀 ~ file: record.component.tsx:18 ~ Records ~ bearerToken:",
      bearerToken
    );

    const res = await fetch(url!, {
      method: "POST",
      headers: {
        Authorization: bearerToken,
      },
      body: JSON.stringify({
        query: `
                  {
                    recordCollection(first: 100) {
                        edges{
                            node{
                              id
                              date
                              diagnose
                              fee
                              medicine
                              patient{
                                name
                              }
                              doctor{
                                name
                                dept
                              }
                            }
                          }
                      }
                    }
                  `,
      }),
    });

    const json = await res.json();
    const data = (json.data && json.data.recordCollection.edges) || [];
    console.log(
      "🚀 ~ file: record.component.tsx:55 ~ fetchRecords ~ data:",
      data
    );
    setRecords(data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>患者姓名</TableCell>
              <TableCell>就诊时间</TableCell>
              <TableCell>主治医生</TableCell>
              <TableCell>病情诊断</TableCell>
              <TableCell>药品清单</TableCell>
              <TableCell align="right">费用(元)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.node.patient.name}
                </TableCell>
                <TableCell>{row.node.date}</TableCell>
                <TableCell>
                  {row.node.doctor.name}({row.node.doctor.dept})
                </TableCell>
                <TableCell>{row.node.diagnose}</TableCell>
                <TableCell>{row.node.medicine}</TableCell>
                <TableCell align="right">
                  {row.node.fee ? row.node.fee.toFixed(2) : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

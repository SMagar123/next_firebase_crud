import React from "react";
import Navbar from "@/components/organisms/Navbar";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import { default as data } from "@/contents/ChartData.json";

const Charts = () => {
  return (
    <>
      <Navbar />
      <SectionContainer className="mt-4">
        <Container className="">
          <GridContainer className="">
            <div className="linecharts col-span-full">
              <h1>Line Chart</h1>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  className="col-span-full border p-4 "
                  data={data?.chartData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    label={{
                      value: "Employee Name",
                      position: "insideBottom",
                      offset: 0,
                      angle: 0,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Amount (in Rs)",
                      position: "insideBottomLeft",
                      angle: -90,
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Line type="monotone" dataKey="salary" stroke="purple" />
                  <Line type="monotone" dataKey="projects" stroke="blue" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="linecharts col-span-full">
              <h1>Bar Chart</h1>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  className="col-span-full border p-4 "
                  data={data?.chartData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    label={{
                      value: "Employee Name",
                      position: "insideBottom",
                      offset: 0,
                      angle: 0,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Amount (in 1000)",
                      position: "insideBottomLeft",
                      angle: -90,
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="salary" fill="purple" />
                  <Bar dataKey="projects" fill="gray" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="linecharts col-span-full">
              <h1>Area Chart</h1>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  className="col-span-full border p-4 "
                  data={data?.chartData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="" />
                  <XAxis
                    dataKey="name"
                    label={{
                      value: "Employee Name",
                      position: "insideBottom",
                      offset: 0,
                      angle: 0,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Amount (in 1000)",
                      position: "insideBottomLeft",
                      angle: -90,
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Area dataKey="salary" fill="purple" />
                  <Area dataKey="projects" fill="gray" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GridContainer>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Charts;

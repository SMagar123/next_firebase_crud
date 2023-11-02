import React, { useEffect, useState } from "react";
import useFetchAllFeatures from "@/hooks/useFetchAllFeatures";
import Navbar from "@/components/organisms/Navbar";
import { useRouter } from "next/router";
import UserDataTable from "@/components/organisms/Table";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import CounterDiv from "@/components/molecules/CounterDiv";

const AdminDashboard = () => {
  const router = useRouter();
  const userRole = "admin";
  const { allData } = useFetchAllFeatures();
  console.log("fetched all records::", allData);

  return (
    <>
      <Navbar userRole={userRole} />
      <SectionContainer className="mt-5">
        <Container>
          <GridContainer>
            <CounterDiv
              title="Total Features Requested"
              count={allData?.length}
            />
            <CounterDiv
              title="New"
              count={allData.filter((item) => item.status === "new")?.length}
              titleColor="red-600"
            />
            <CounterDiv
              title="On Process"
              count={
                allData.filter((item) => item.status === "on process")?.length
              }
              titleColor="green-600"
            />
            <CounterDiv
              title="Solved"
              count={allData.filter((item) => item.status === "solved")?.length}
              titleColor="blue-600"
            />
          </GridContainer>
        </Container>
      </SectionContainer>
    </>
  );
};

export default AdminDashboard;

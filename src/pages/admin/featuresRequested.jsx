import React, { useEffect, useState } from "react";
import useFetchAllFeatures from "@/hooks/useFetchAllFeatures";
import Navbar from "@/components/organisms/Navbar";
import { useRouter } from "next/router";
import UserDataTable from "@/components/organisms/Table";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";

const AdminDashboard = () => {
  const router = useRouter();
  const userRole = "admin";
  const { allData } = useFetchAllFeatures();
  console.log("fetched all records::", allData);

  return (
    <>
      <Navbar userRole={userRole} />
      <SectionContainer className="mt-3">
        <Container>
          <GridContainer>
            <UserDataTable
              userData={allData}
              heading={"Feature Requested "}
              userRole={userRole}
            />
          </GridContainer>
        </Container>
      </SectionContainer>
    </>
  );
};

export default AdminDashboard;

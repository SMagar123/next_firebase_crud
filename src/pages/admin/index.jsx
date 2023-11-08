import React, { useEffect, useState } from "react";
import useFetchAllFeatures from "@/hooks/useFetchAllFeatures";
import Navbar from "@/components/organisms/Navbar";
import { useRouter } from "next/router";
import UserDataTable from "@/components/organisms/Table";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import CounterDiv from "@/components/molecules/CounterDiv";
import { NextResponse, NextRequest } from "next/server";

const AdminDashboard = () => {
  const router = useRouter();
  const userRole = "admin";
  const { allData } = useFetchAllFeatures();
  console.log("fetched all records::", allData);

  // const middleware = async (request, response) => {
  //   const session = request?.cookies?.get("session");
  //   console.log("session", session);

  //   //Return to /login if don't have a session
  //   if (!session) {
  //     // return NextResponse.redirect(new URL("/", request?.url));
  //     return NextResponse.redirect(new URL("/"));
  //   }

  //   //Call the authentication endpoint
  //   const responseAPI = await fetch("/api/login", {
  //     headers: {
  //       Cookie: `session=${session?.value}`,
  //     },
  //   });

  //   //Return to /login if token is not authorized
  //   if (responseAPI.status !== 200) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   return NextResponse.next();
  // };

  // useEffect(() => {
  //   middleware();
  // }, []);

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

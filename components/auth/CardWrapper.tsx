"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapper {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapper) => {
  return <Card className="w-[400px] shadow-md">
    <CardHeader>
    <Header label={headerLabel} />
    </CardHeader>
    <CardContent>
    {children}
    </CardContent>
    <CardFooter>
        {showSocial && <Social />}
    </CardFooter>
    <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
    </CardFooter>
  </Card>;
};

export default CardWrapper;

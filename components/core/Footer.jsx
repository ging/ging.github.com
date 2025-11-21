"use client";

import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { activeRoutes } from "@/constants/routes";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from "../ui/image";
import Text from "../ui/Text";
import Link from 'next/link';
import { YouTube } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { X } from "@mui/icons-material";
import { Button, ButtonVariants } from "@/components/ui/button";
import ArticleIcon from '@mui/icons-material/Article';

export default function Footer(props) {
  const { t } = useTranslation();

  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start justify-start sm:justify-center"
  );

  const sectionTitleClasses = clsx(
    "uppercase text-left-2 text-[14px] mb-3 "
  );

  return (
    <footer className="narrow_padding flex flex-col flex-wrap justify-start gap-8 xs:flex-row md:justify-between items-start bg-background-300 text-gray-300">
      <div className={projectLogoContainerClasses}>
      <Image
          className="min-w-40 max-w-[155px] opacity-70 mb-4" // Corrige la sintaxis del max-width
          src="ging_logo.png"
          alt="ging logo"
          fit="contain"
        />
        <div className=" flex justify-center flex-col gap-0 xs:gap-2 md:flex-col md:gap-0">
          <div className="flex flex-row">
            <EmailOutlinedIcon className="mr-2 mt-0.5"  sx={{ fontSize: 20 }}/>
            <Text className=" text-[14px] flex gap-1">
              {t("footer.email")}   
            </Text>
          </div>
          <Text className="font-semibold"> gi.internetng@upm.es</Text>
        </div>
      </div>

      <nav className="">
        <div className={sectionTitleClasses}>{t("footer.title1")}</div>
        <ul
          className={`font-semibold columns-1 gap-x-4 inline-block ${activeRoutes.length <= 3 ? "xs:columns-1" : "xs:columns-2"
            }`}
        >
          {activeRoutes.map((route, index) => (
            <li
              key={index}
              className={
                route.route === props.route
                  ? "li-selected text-left mb-1 lg:mb-1.5 hover:underline"
                  : "text-left mb-1 lg:mb-1.5 hover:underline"
              }
            >
              <Link className="text-base" href={route.route}>
                {t(route.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="">
        <div className={sectionTitleClasses}>{t("footer.title2")}</div>
        <ul className="font-semibold flex flex-col gap-0.5">
          <Link target="_blank" href="https://www.youtube.com/user/FirefoxOSHTML5/featured" className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
            <Button href="#" className={ButtonVariants({
              variant: "default",
              size: "icon_sm",
              radius: "rounded_full",
            }) + " bg-red-600 hover:bg-red-600 mr-2"}>
              <YouTube  sx={{ fontSize: 18 }}/>
            </Button>
            <p>Youtube</p>
          </Link>
          <Link target="_blank" href="https://www.researchgate.net/lab/Next-Generation-Internet-Group-Juan-Quemada" className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
            <Button href="#" className={ButtonVariants({
              variant: "default",
              size: "icon_sm",
              radius: "rounded_full",
            }) + " bg-teal-600 hover:bg-teal-600 mr-2"}>
              <ArticleIcon sx={{ fontSize: 18 }}/>

            </Button>
            <p>ResearchGate</p>
          </Link>
          <Link target="_blank" href="https://github.com/ging" className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
            <Button href="#" className={ButtonVariants({
              variant: "default",
              size: "icon_sm",
              radius: "rounded_full",
            }) + " bg-orange-500 hover:bg-orange-500 mr-2"}>
              <GitHub sx={{ fontSize: 18 }} />
            </Button>
            <p> Github</p>
          </Link>
          <Link target="_blank" href="https://x.com/GING_UPM" className={"text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"}>
            <Button href="#" className={ButtonVariants({
              variant: "default",
              size: "icon_sm",
              radius: "rounded_full",
            }) + " bg-blue-700 hover:bg-blue-700 mr-2"}>
              <X sx={{ fontSize: 18 }} />
            </Button>
            <p> X (Twitter)</p>
          </Link>
        </ul>
      </nav>
      <div className="font-sm flex flex-col max-w-[20ch]">
        <small className="mb-[1rem]">2025 © </small>
        <small className="mb-[1rem]"> Department of Telematic Systems Engineering </small>
        <small >ETSI Telecomunicación UPM</small>
      </div>


    </footer>
  );
}

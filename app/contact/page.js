"use client";

import { useTranslation } from "react-i18next";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonVariants} from "@/components/ui/button"
import { FileDownloadOutlined } from "@mui/icons-material";

export default function Contact(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className={"about page_" + currentLang}>
      {/* <Header route={"/about"} /> */}

      <main className="standard_padding ">
        <div className="banner pb-8">
          <Heading level="h2">{t("contact.title")}</Heading>

          <Text type="p">{t("contact.body")}</Text>
        </div>
        <div>
    <a href="/assets/documents/presentacion_ging.pdf" download="GING_activity.pdf">
      <Button variant="outline" className="mb-8 gap-1 pb-2.5">
        <FileDownloadOutlined className="h-6"/>
        {t("contact.buttonDownload")}
      </Button>
    </a>
  </div>
        <section>
          <div>
            <div className="sm:w-3/4 md:w-full contact_info mx-auto grid grid-cols-1 gap-4 lg:gap-8 pb-8 md:grid-cols-2 lg:pb-0">
              <div className="text-center min-h-40 shadow-md px-5 py-6 rounded bg-background-300/50 ">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                <div className="flex flex-col items-start w-[240px] ">
                  <div className="flex flex-row items-center gap-1">
                    <span className="content-center flex justify-center items-center mb-1.5">
                      <LocalPhoneOutlinedIcon className=" h-5 w-5 text-gray-400" />
                    </span>

                    <Heading level="title-sm">{t("contact.phone")}</Heading>
                  </div>
                  <p  className="ml-7 text-gray-300/80"> 91 336 73 31</p>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-row items-center gap-2">
                    <span className="content-center flex justify-center items-center mb-1.5">
                      <LocalPrintshopOutlinedIcon className=" h-5 w-5 text-gray-400" />
                    </span>

                    <Heading level="title-sm">{t("contact.fax")}</Heading>
                  </div>
                  <p  className="ml-7 text-gray-300/80"> 91 336 73 31</p>
                </div>
                </div>
                <Divider className=" border-gray-300/30 mb-5 mx-5"></Divider>
                <div className="flex flex-col gap-2 items-start w-full">
                  <div className="flex flex-row items-center gap-2">
                    <span className="content-center flex justify-center items-center mb-1.5">
                      <MailOutlinedIcon className=" h-5 w-5 text-gray-400" />
                    </span>

                    <Heading level="title-sm">{t("contact.email")}</Heading>
                  </div>
                  <div className="flex flex-col gap-3 w-full sm:w-4/5 xl:w-2/3 text-white/60">
                    <div className="border text-left border-gray-600 rounded-md p-4  bg-gray-700/60 w-full flex flex-col items-start ">
                      <Text
                        type="p"
                        className="font-bold uppercase mb-1  text-white/70"
                      >
                        {" "}
                        {t("contact.contactmail.general")}
                      </Text>
                      <Text type="p" className=" text-white/80">
                        gi.internetng@upm.es
                      </Text>
                      <Text type="p" className=" text-white/80">
                        alvaro.alonso@upm.es
                      </Text>
                    </div>

                    <div className="border text-left border-data-500 rounded-md p-4 bg-data-600/40 w-full flex flex-col items-start ">
                      <Text
                        type="p"
                        className="font-bold uppercase mb-1 text-white/80"
                      >
                        {" "}
                        {t("contact.contactmail.data")}
                      </Text>
                      <Text type="p" className=" text-white/80">
                        joaquin.salvachua@upm.es
                      </Text>
                    </div>
                    <div className="border text-left border-ai-700 rounded-md p-4 text-white/80 bg-ai-700/20 w-full flex flex-col items-start ">
                      <Text type="p" className="font-bold uppercase mb-1">
                        {" "}
                        {t("contact.contactmail.ai")}
                      </Text>
                      <Text type="p" className=" text-white/80">
                        pedro.reviriego@upm.es
                      </Text>
                    </div>
                    <div className="border text-left border-videoconference-400/70 rounded-md p-4 bg-videoconference-500/30 w-full flex flex-col items-start ">
                      <Text
                        type="p"
                        className="font-bold uppercase mb-1 text-white/80"
                      >
                        {" "}
                        {t("contact.contactmail.videoconference")}
                      </Text>
                      <Text type="p" className=" text-white/80">
                        alvaro.alonso@upm.es
                      </Text>
                    </div>
                    <div className="border text-left border-eLearning-500/70 rounded-md p-4 bg-eLearning-600/20 w-full flex flex-col items-start ">
                      <Text
                        type="p"
                        className="font-bold uppercase mb-1 text-white/80"
                      >
                        {" "}
                        {t("contact.contactmail.e-learning")}
                      </Text>
                      <Text type="p" className=" text-white/80">
                        enrique.barra@upm.es
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-center min-h-40 shadow-md px-5 py-6 rounded bg-background-300/50">
                <div className="flex flex-col gap-2 ">
                  <div>
                <div className="flex flex-row items-center gap-2">
                    <span className="content-center flex justify-center items-center mb-1.5">
                      <LocationOnOutlinedIcon className=" h-5 w-5 text-gray-400" />
                    </span>

                    <Heading level="title-sm">{t("contact.location")}</Heading>
                  </div>
                  <div className="justify-start items-start flex flex-col">
                  <Heading level="h6" className={"mb-0 text-gray-300 text-left"}>
                  {t("contact.direction1")} <br />
                     
                    </Heading>
                    <Text type="small" className={"block leading-5 text-gray-300/80 text-left mb-4"}>
             
                      {t("contact.direction2")} <br />
                      {t("contact.direction3")} <br />
                    </Text>
                    </div>
                    </div>
                    <div className="location_map map-responsive">
                      <iframe
                        title="maps"
                        className="w-full rounded-sm"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0248536844406!2d-3.7286225846430923!3d40.45258687936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422834b7a8fb4d%3A0x2a3c66a12ada73f9!2sUPM+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+de+Telecomunicaci%C3%B3n!5e0!3m2!1ses!2ses!4v1561459882911!5m2!1ses!2ses"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0, filter: 'grayscale(70%) hue-rotate(180deg) invert(92%) contrast(83%)' }}

                        allowFullScreen
                      ></iframe>
                    </div>
                 
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

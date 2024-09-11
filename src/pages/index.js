import Link from "next/link";
import React, { useEffect, useRef, useCallback } from "react";
import Button from "../../components/Button";
import { handleScroll } from "../../utils";

const lawyers = [
  {
    name: "Makridakis PLLC",
    logo: "/makridakisLogo.png",
    url: "https://makridakispllc.com",
  },
  {
    name: "Black Mesa",
    logo: "/blacMesaLogo.png",
    url: "https://makridakispllc.com",
  },
  {
    name: "Greg Sachs and Associates",
    logo: "/vps.png",
    url: "https://makridakispllc.com",
  },
];

const Page = () => {
  const overlayRef = useRef(null);

  const onScroll = useCallback(() => {
    handleScroll(overlayRef);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <div ref={overlayRef} className="background-image overlay">
        <div className="container">
          <div className="row">
            <div className="mr-auto max-[640px]:mx-2 col-md-6">
              <div className="brand">
                <p className="text-[53px] font-bold mt-[30px] mb-[25px]">
                  Introsteller
                </p>
                <p className="text-lg	 font-light my-[10px]">
                  IP Services and Technology <br />
                  Become an inventor and file your first patent
                </p>
                <br />
                <Button
                  type="primary"
                  className="text-sm font-medium py-[26px] px-9 my-[5px] uppercase"
                >
                  File Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container mr-auto ml-auto">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <p className="text-[#999] pt-5 text-[17px] font-light	">
                  {" "}
                  Companies with IP have a 10.4X higher chance of getting
                  funding.Peer reviewed study from the European USTPO
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl	font-bold mt-8">
                Partnered with Experienced Lawyers/Firms
              </h2>
              <div className="row max-[640px]:flex-col justify-center">
                {lawyers.map((lawyer) => (
                  <div key={lawyer.name} className="col-md-4 mx-4">
                    <div className="info">
                      <div className="h-[92px!important]">
                        <img
                          src={lawyer.logo}
                          alt={lawyer.name}
                          className="max-[640px]:mx-auto"
                        />
                      </div>
                      <Link className="text-lg font-bold" href={lawyer.url}>
                        {lawyer.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

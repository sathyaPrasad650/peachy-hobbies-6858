import {
  Input,
  InputGroup,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/HomePageHeader.module.css";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import LoginDrawer from "./LoginDrawer";

function HomePageHeader() {
  const { state, loginData, setLoginData } = React.useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          alt=""
          style={{ width: "131px", height: "39px", marginLeft: "30px" }}
        />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} to="/">
              Blog
            </Link>
          </li>
          <li className={styles.li}>
            <u>
              <Link className={styles.link} to="/">
                Register As A Professional
              </Link>
            </u>
          </li>
          {state.auth ? (
            <li className={styles.li}>
              <Link className={styles.link} to="/">
                {state.auth ? "My Bookings" : ""}
              </Link>
            </li>
          ) : (
            ""
          )}
          {/* <li className={styles.li}>
            <Link className={styles.link} to="/">
              {state.auth ? "Logout-Verified Customer" : <LoginDrawer />}
            </Link>
          </li> */}
          <li>
            <LoginDrawer />
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "130px" }}>
        <Breadcrumb className={styles.breadcrumb}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Location</BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem> */}
        </Breadcrumb>
        <Heading
          as="h2"
          size="2xl"
          noOfLines={1}
          color="white"
          fontWeight="600"
          marginTop="15px"
        >
          Home services, on demand
        </Heading>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <Popover placement="top-start">
            <PopoverTrigger>
              <Button
                mr="20px"
                backgroundColor="white"
                fontWeight="400"
                width="180px"
                height="54px"
              >
                Delhi NCR
              </Button>
            </PopoverTrigger>
            <PopoverContent w="360px">
              <PopoverHeader
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <p style={{ fontWeight: "400" }}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLocationDot}
                    mr="20px"
                  />
                  Current Location
                </p>
                <p style={{ fontWeight: "400" }}>Detect Using GPS</p>
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <InputGroup borderRightRadius="5px">
                  {/* <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  /> */}
                  <Input
                    backgroundColor="white"
                    placeholder="Search for services"
                    fontSize="16px"
                    height="54px"
                  />
                </InputGroup>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* <FormControl> */}
          <InputGroup w="588px" borderRightRadius="5px">
            {/* <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              /> */}
            <Input
              backgroundColor="white"
              placeholder="Search for services"
              fontSize="16px"
              height="54px"
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </InputGroup>
          {/* </FormControl> */}
        </div>
        <p
          style={{
            color: "white",
            fontWeight: "400",
            marginTop: "8px",
            marginLeft: "12px",
            fontSize: "16px",
          }}
        >
          <u>Women's Therapies</u> , <u>Salon for Men</u>,{" "}
          <u>Men's Therapies</u>
          {"  "}etc
        </p>
      </div>

      <div className={styles.box}></div>
    </div>
  );
}

export default HomePageHeader;

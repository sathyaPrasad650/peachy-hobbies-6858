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
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/HomePageHeader.module.css";

function HomePageHeader() {
  const { state, loginData, setLoginData } = React.useContext(AuthContext);
  console.log(loginData);

  //   const handleChange = (e) => {
  //     {name,value} =e.target
  //     setLoginData(...loginData, [name]:value)
  //   }
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src="" alt="" />
        <Link to="/">Blog</Link>
        <Link to="/">Register As A Professional</Link>
        <Link to="/">My Bookings</Link>
        <Link to="/">{}</Link>
      </div>
      <div>
        <Heading as="h2" size="2xl" noOfLines={1} color="white">
          Home services, on demand
        </Heading>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
          </InputGroup>
        </div>
      </div>

      <div className={styles.box}></div>
    </div>
  );
}

export default HomePageHeader;

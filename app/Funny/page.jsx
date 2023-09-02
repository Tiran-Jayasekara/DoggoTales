"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Input } from "antd";
import Footer from "../../components/Footer/Footer";
import cards from "./Data";

const Funny = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    // Set the initial visible cards count to 6
    setFilteredCards(cards);
    setVisibleCards(6);
  }, []);

  const visibleData = filteredCards.slice(0, visibleCards);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = cards.filter((card) =>
      card.heading.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  return (
    <>
    <div className="mt-40 md:mt-20">
      <Row>
        <Col
          className=""
          xs={{ span: 20 }}
          sm={{ span: 22 }}
          lg={{ span: 22 }}
        >
          <h1 className="mx-auto ml-20 lg:text-6xl text-2xl font-poppins tracking-normal font-semibold text-center  mt-20">
            <span className="text-[#c07c45]">Dogs </span> Funny 
          </h1>
        </Col>
      </Row>

      <Col className=""></Col>

      <Row className="flex justify-end mt-0 lg:mr-40 mr-10">
        <Col xs={{ span: 20 }} sm={{ span: 8 }} lg={{ span: 5 }} className="">
          <Input.Search
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
            allowClear
          />
        </Col>
      </Row>

      <Row className="lg:ml-20 lg:mr-20 mt-0">
        {visibleData.map((card, index) => (
          <Col
            key={index}
            className="mx-auto pl-1 mt-30 p-10 transform hover:scale-105 ml-8 md:ml-0 md:pl-4"
            xs={{ span: 22 }}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Card className="h-auto">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt="green iguana"
                  loading="lazy"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {/* Use <span> or other appropriate HTML elements */}
                    <span className="text-xl font-bold text-slate-700 mb-3">
                      {card.heading}
                    </span>
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    {/* Use <span> or other appropriate HTML elements */}
                    <span>
                      BY
                      <span className="font-poppins text-11 text-black">
                        {" "}
                        PeerWave{" "}
                      </span>{" "}
                      SEPTEMBER 25, 2023
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href={card.link}>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCards < filteredCards.length && (
        <div className="flex justify-center mt-8">
          <button onClick={handleSeeMore} className="outline_btn">
            See More
          </button>
        </div>
      )}

      <Footer />
    </div>
  </>
  );
}

export default Funny
import { Col, Row } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardList from "./Data";
import Link from "next/link";

const Ppost = () => {
  return (
    <>
      <h1 className="mt-40 font-sans text-2xl font-bold sm:px-16 px-6 justify-center items-center ml-2 md:ml-10">
        Populer Posts
      </h1>

      <Row className="lg:ml-20 lg:mr-20 lg:mt-0 md:ml-10 md:mr-10 sm:mr-10 sm:ml-10">
        {CardList.map((card, index) => (
          <Col
            key={index}
            className="mx-auto mt-10 px-4 transition-transform duration-300 ease hover:scale-105"
            xs={{ span: 22 }}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Card className="">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt="green iguana"
                  loading="lazy"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className=" "
                  >
                    <h4 className="text-xl font-bold text-slate-700 mb-3">
                      {card.heading}
                    </h4>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  ></Typography>
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
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          className="flex justify-center mt-20 md:mt-40 lg:mt-20"
        >
          <Link href="/blogs">
            <div className="bg-gradient-to-r from-[#c07c45] to-[#e4b598] rounded-2xl hover:from-[#e4b598] hover:to-[#c07c45] transform hover:scale-105 h-auto w-60 mt-10 md:mt-0">
              <h5 className="text-black font-poppins text-center md:text-xl text-1xl font-semibold tracking-wide p-2">
                See More Posts
              </h5>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Ppost;

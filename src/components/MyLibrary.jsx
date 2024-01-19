import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyLibrary = () => {
    const favourites = useSelector((state) => state.favourite.list)
    return (
        <>
            <div className="mainPage mt-3 ms-5">
                <Row>
                    <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a href="trending">TRENDING</a>
                        <a href="podcast">PODCAST</a>
                        <a href="MOODS AND GENRES">MOODS AND GENRES</a>
                        <a href="NEW RELEASES">NEW RELEASES</a>
                        <a href="DISCOVER">DISCOVER</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="rock">
                            <h2>My Library</h2>
                            <div id="rockSection">
                                <Row
                                    xs={1}
                                    md={2}
                                    lg={3}
                                    xl={4}
                                    className="g-2"
                                >
                                    {favourites.map((song) => (
                                        <Col key={song.id}>
                                            <img
                                                src={song.album.cover_medium}
                                                alt={song.album.title}
                                            />
                                            <p
                                                className="custom-font-size-p mt-3"
                                                style={{
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                            >
                                                Titolo:{" "}
                                                {song.title.length
                                                    ? song.title
                                                    : `${song.title}...`}
                                            </p>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default MyLibrary




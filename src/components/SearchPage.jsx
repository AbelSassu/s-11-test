import React from "react";
import { Row, Col } from "react-bootstrap";
import GetSong from "./GetSong";
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const { query } = useParams();

    return (
        <div className="mainPage ms-5">
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex mt-3">
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
                        <h2>Search Results</h2>
                        <div id="rockSection">
                            <GetSong genere={query} showC={12} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SearchPage;
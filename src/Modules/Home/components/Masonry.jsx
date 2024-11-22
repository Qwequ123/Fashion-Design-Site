import React from "react";
import { Masonry } from "@tx666/masonry";
import { Imagedata } from ".";

const Gallery = () => {
    const columns = {
        xs: 2,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 5,
    };

    return (
        <section className="py-2 px-20">
            <Masonry column={columns} data={Imagedata} />
        </section>
    );
};

export default Gallery;

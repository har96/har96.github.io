export interface Publication {
    title: string;
    reference: string;
    url: string;
    published: Date;
}


export const PUBLICATIONS: Publication[] = [
    {
        title: "Modeling the radiative response of a high facet count rainforest for synthetic sensor imagery",
        reference: "R. H. Hunter, B. C. White, R. R. Patel, and J. R. Ballard, “Modeling the radiative response of a high facet count rainforest for synthetic sensor imagery,” in Algorithms, Technologies, and Applications for Multispectral and Hyperspectral Imaging XXVII, 2021, vol. 11727, pp. 100–107.",
        url: "https://doi.org/10.1117/12.2585983",
        published: new Date("2021-04-10")
    },
    {
        title: "Ensemble forecasts of Coronavirus Disease 2019 (COVID-19) in the U.S",
        reference: "E. L. Ray et al., “Ensemble forecasts of Coronavirus Disease 2019 (COVID-19) in the U.S,” medRxiv. 2020.",
        url: "http://dx.doi.org/10.1101/2021.02.03.21250974",
        published: new Date("2020")
    },
    {
        title: "Parallel file I/O for geometric models: formats and methods",
        reference: "R. H. Hunter, B. C. White, R. R. Patel, and J. R. Ballard, “Parallel file I/O for geometric models: formats and methods,” 2020.",
        url: "http://dx.doi.org/10.21079/11681/36758",
        published: new Date("2020-05"),
    },
    {
        title: "Massively parallel synthetic sensor-based infrared image generation for object detection",
        reference: "A. A. Valoroso, B. C. White, J. R. B. Jr., R. H. Hunter, and R. R. Patel, “Massively parallel synthetic sensor-based infrared image generation for object detection,” in Detection and Sensing of Mines, Explosive Objects, and Obscured Targets XXV, 2020, vol. 11418, pp. 53–64.",
        url: "http://dx.doi.org/10.1117/12.2558107",
        published: new Date("2020-04")
    },
    {
        title: "A terabyte-scale geometry query engine for the generation of synthetic radiative transfer sensor imagery",
        reference: "B. C. White, R. H. Hunter, A. A. Valoroso, R. R. Patel, and J. R. B. Jr., “A terabyte-scale geometry query engine for the generation of synthetic radiative transfer sensor imagery,” in Disruptive Technologies in Information Sciences IV, 2020, vol. 11419, pp. 1–14.",
        url: "http://dx.doi.org/10.1117/12.2558210",
        published: new Date("2020-04")
    },
    {
        title: "Partitioning Terabyte-scale Faceted Geometry Models for Efficient Parallel Ray Tracing Using Out-of-core Memory",
        reference: "R. H. Hunter, B. C. White, R. R. Patel, and J. R. Ballard Jr, “Partitioning Terabyte-scale Faceted Geometry Models for Efficient Parallel Ray Tracing Using Out-of-core Memory,” in 2020 ACM Southeast Conference, 2020.",
        url: "http://dx.doi.org/10.1145/3374135.3385310",
        published: new Date("2020-04")
    },
    {
        title: "Using Morton Codes to Partition Faceted Geometry: An Architecture for Terabyte-Scale Geometry Models",
        reference: "R. H. Hunter, B. C. White, R. R. Patel, and J. R. Ballard, “Using Morton codes to partition faceted geometry: an architecture for terabyte-scale geometry models,” 2020.",
        url: "http://dx.doi.org/10.21079/11681/36516",
        published: new Date("2020-04")
    },
    {
        title: "Measuring I/O Performance of Lustre and the Temporary File System for Tradespace Applications on HPC Systems",
        reference: "L. Kosta, H. Hunter, G. George, A. Strelzoff, and S. Matthews, “Measuring I/O performance of lustre and the temporary file system for tradespace applications on HPC systems,” in Proceedings of the SouthEast Conference, ACMSE 2017, 2017.",
        url: "http://dx.doi.org/10.1145/3077286.3077326",
        published: new Date("2017-04")
    }
];

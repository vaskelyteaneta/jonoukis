import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image: FC<ImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="image-slice py-8 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {slice.primary.image && (
          <PrismicImage field={slice.primary.image} className="image-slice-image rounded-lg" />
        )}
      </div>
    </section>
  );
};

export default Image;

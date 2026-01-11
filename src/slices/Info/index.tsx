import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

/**
 * Props for `Info`.
 */
export type InfoProps = SliceComponentProps<Content.InfoSlice>;

/**
 * Component for "Info" Slices.
 */
const Info: FC<InfoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="info-slice"
    >
      {slice.primary.text && (
        <PrismicRichText field={slice.primary.text} className="info-slice-text" />
      )}
      {slice.primary.image && (
        <PrismicImage field={slice.primary.image} className="info-slice-image" />
      )}
    </section>
  );
};

export default Info;

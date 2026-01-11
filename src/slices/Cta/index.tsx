import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta: FC<CtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="cta-slice"
    >
      {slice.primary.text && (
        <PrismicRichText field={slice.primary.text} className="cta-slice-text" />
      )}
      {slice.primary.link && (
        <PrismicLink field={slice.primary.link} className="cta-slice-link">
          {slice.primary.link.url ? "Learn more" : "Click here"}
        </PrismicLink>
      )}
    </section>
  );
};

export default Cta;

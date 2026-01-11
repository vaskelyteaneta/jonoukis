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
      className="cta-slice py-8 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {slice.primary.text && (
          <div className="bg-white p-6 mb-6 rounded-lg shadow-sm">
            <PrismicRichText field={slice.primary.text} className="cta-slice-text prose max-w-none" />
          </div>
        )}
        {slice.primary.link && (
          <PrismicLink field={slice.primary.link} className="cta-slice-link inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            {slice.primary.link.url ? "Learn more" : "Click here"}
          </PrismicLink>
        )}
      </div>
    </section>
  );
};

export default Cta;

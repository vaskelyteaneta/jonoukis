import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage, PrismicLink } from "@prismicio/react";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner: FC<BannerProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="banner"
    >
      {"image" in slice.primary && slice.primary.image && (
        <PrismicImage field={slice.primary.image as any} className="banner-image" />
      )}
      {slice.primary.heading && (
        <h1 className="banner-heading">
          {slice.primary.heading}
        </h1>
      )}
      {"description" in slice.primary && slice.primary.description && (
        Array.isArray(slice.primary.description) ? (
          <PrismicRichText field={slice.primary.description as any} className="banner-description" />
        ) : (
          <p className="banner-description">
            {String(slice.primary.description)}
          </p>
        )
      )}
      {"primary_cta" in slice.primary && slice.primary.primary_cta && (
        <PrismicLink field={slice.primary.primary_cta as any} className="banner-cta">
          {("primary_cta_label" in slice.primary && slice.primary.primary_cta_label) || "Learn more"}
        </PrismicLink>
      )}
    </section>
  );
};

export default Banner;

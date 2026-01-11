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
      className="banner py-8 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {"image" in slice.primary && slice.primary.image && (
          <PrismicImage field={slice.primary.image as any} className="banner-image mb-6 rounded-lg" />
        )}
        {slice.primary.heading && (
          <h1 className="banner-heading text-3xl font-bold mb-4">
            {slice.primary.heading}
          </h1>
        )}
        {"description" in slice.primary && slice.primary.description && (
          Array.isArray(slice.primary.description) ? (
            <div className="bg-white p-6 mb-6 rounded-lg shadow-sm">
              <PrismicRichText field={slice.primary.description as any} className="banner-description prose max-w-none" />
            </div>
          ) : (
            <div className="bg-white p-6 mb-6 rounded-lg shadow-sm">
              <p className="banner-description">
                {String(slice.primary.description)}
              </p>
            </div>
          )
        )}
        {"primary_cta" in slice.primary && slice.primary.primary_cta && (
          <PrismicLink field={slice.primary.primary_cta as any} className="banner-cta inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            {("primary_cta_label" in slice.primary && slice.primary.primary_cta_label) || "Learn more"}
          </PrismicLink>
        )}
      </div>
    </section>
  );
};

export default Banner;

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
      className="info-slice py-8 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {slice.primary.text && (
          <div className="bg-white p-6 mb-6 rounded-lg shadow-sm">
            <div className="info-slice-text">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
        )}
        {slice.items && slice.items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {slice.items.map((item, index) => (
              item.image && (
                <PrismicImage 
                  key={index}
                  field={item.image} 
                  className="info-slice-image rounded-lg w-full" 
                />
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Info;

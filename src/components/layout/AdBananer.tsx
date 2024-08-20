import { useEffect, useRef } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  className?: string;
};

function AdBanner({ dataAdSlot, dataAdFormat, dataFullWidthResponsive, className = "" }: AdBannerTypes) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.getAttribute("data-loading-flag")) {
      try {
        adRef.current.setAttribute("data-loading-flag", "true");
        // 尝试加载广告
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block" }}
        data-ad-client="ca-pub-5901616898778649"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}></ins>
      <div id="container-f6f9c67e40f0d0078818ca05aa4c5ec6"></div>
    </div>
  );
}

export { AdBanner };

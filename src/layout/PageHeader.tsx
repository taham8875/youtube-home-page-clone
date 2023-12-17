import { useState } from "react";
import PageHeaderRightIcons from "./PageHeaderRightIcons";
import PageHeaderMenuIconAndLogo from "./PageHeaderMenuIconAndLogo";
import PageHeaderSearchForm from "./PageHeaderSearchForm";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <header className="flex gap-10 lg:gap-20 justify-between pt-1 mb-6 mx-4">
      <PageHeaderMenuIconAndLogo showFullWidthSearch={showFullWidthSearch} />
      <PageHeaderSearchForm
        showFullWidthSearch={showFullWidthSearch}
        setShowFullWidthSearch={setShowFullWidthSearch}
      />
      <PageHeaderRightIcons
        showFullWidthSearch={showFullWidthSearch}
        setShowFullWidthSearch={setShowFullWidthSearch}
      />
    </header>
  );
};

export default PageHeader;

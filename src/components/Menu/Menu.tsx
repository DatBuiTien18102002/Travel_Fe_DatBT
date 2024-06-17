import HeadlessTippy from "@tippyjs/react/headless";
import Wrapper from "./Wrapper/Wrapper";
import MenuItem from "./MenuItem/MenuItem";
import { userMenuProps } from "@/types/types";

const UserMenu: React.FC<userMenuProps> = ({
  children,
  items = [],
  hideOnClick = false,
}) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        // visible
        hideOnClick={hideOnClick}
        placement="bottom-end"
        offset={[17, 17]}
        render={(attrs) => (
          <div className="w-[180px]" tabIndex={-1} {...attrs}>
            <Wrapper className="pb-2">
              <div className="w-full h-full flex flex-col overflow-auto">
                {renderItems()}
              </div>
            </Wrapper>
          </div>
        )}
      >
        {children}
      </HeadlessTippy>
    </div>
  );
};

export default UserMenu;

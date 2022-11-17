import CounterChip from "../common/CounterChip";

export default function SideNavItem({ icon, label, active, route, counter }) {
  const onClickItem = () => {};
  return (
    <>
      <div className="itemContainer" onClick={onClickItem}>
        <div className="leftItemPanel">
          <img src={icon} />
          {label}
        </div>
        {counter > 0 && (
          <div className="rightItemPanel">
            <CounterChip counter={counter} />
          </div>
        )}
      </div>
    </>
  );
}

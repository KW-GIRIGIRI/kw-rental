import { Wrap } from "./style";
import exclamationIcon from "../../assets/icon-exclamation-gray.svg";

export default function EmptyData({ content, className }) {
  return (
    <Wrap className={className}>
      <img src={exclamationIcon} alt="경고 아이콘" />
      {content.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </Wrap>
  );
}

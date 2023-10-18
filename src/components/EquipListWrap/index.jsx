import { useContext } from "react";
import { AuthContext } from "../../context/Context";
import GalType from "./GalType";
import ListType from "./ListType";
import { ListLi } from "./ListType/style";
import { TypeWrap, GalUl, ListUl } from "./style";

export default function EquipListWrap({ type, data }) {
  const { isAuth } = useContext(AuthContext);

  return (
    <TypeWrap>
      {type === "list" ? (
        <ListUl>
          <ListLi>
            <p>사진</p>
            <p>기자재명</p>
            <p>{isAuth ? "총 개수" : "대여 가능 / 총 개수"}</p>
          </ListLi>
          {data.map((item) => (
            <ListType key={item.id} item={item} />
          ))}
        </ListUl>
      ) : (
        <GalUl>
          {data.map((item) => (
            <GalType key={item.id} item={item} />
          ))}
        </GalUl>
      )}
    </TypeWrap>
  );
}

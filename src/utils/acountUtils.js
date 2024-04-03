import { useSelector } from "react-redux";
// 계정
const getCurrentAcount = () => {
    const acount = useSelector(state => state.acount.acount)
    const currnetAcount = useSelector(state => state.acount.currnetAcount)
    const { nickname, treeType, treeLevel, acountId } = currnetAcount
    const wonderNickname = acount.find((item) => item.acountId === acountId).nickname;
    const wonderTreeLevel = acount.find((item) => item.acountId === acountId).treeLevel;

    return {
        acount,
        currnetAcount,
        wonderNickname,
        wonderTreeLevel,
        acountId
    };
};
export default getCurrentAcount
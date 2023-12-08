import { useSelector } from "react-redux";

const getCurrentAcount = () => {
    const acount = useSelector(state => state.acount.acount)
    const localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    const { nickname, treeType, treeLevel, acountId } = localCurrentAcount
    const wonderNickname = acount.find((item) => item.acountId === acountId).nickname;
    const wonderTreeLevel = acount.find((item) => item.acountId === acountId).treeLevel;

    return {
        acount,
        localCurrentAcount,
        wonderNickname,
        wonderTreeLevel,
        acountId
    };
};
export default getCurrentAcount
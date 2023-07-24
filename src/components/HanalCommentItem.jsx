import React from 'react';
import { useSelector } from 'react-redux';

const HanalCommentItem = ({ item }) => {
    const { commentId, commentAuthorId, dateTime, text } = item
    // const localCurrentAcount = JSON.parse(localStorage.getItem('localCurrentAcount'));
    // const { nickname, treeType, treeLevel, acountId } = localCurrentAcount
    // const board = useSelector(state => state.board.board)
    const acount = useSelector(state => state.acount.acount)
    const authorAcount = acount.find(item => item.acountId === commentAuthorId)
    const authorNickname = authorAcount.nickname
    const authorTree = authorAcount.treeLevel
    return (
        <li>
            <img src={`./images/trees/tree${authorTree}.png`} alt='' />
            <div className="nickname">{authorNickname}</div>
            <div className="text">{text}</div>
        </li>
    );
};

export default HanalCommentItem;
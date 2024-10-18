import React, { FC, type ReactNode } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './index.css';

interface IconWrapperProps {
    children: ReactNode;
    name: string;
}

const IconWrapper: FC<IconWrapperProps> = props => {
    const { children, name } = props;

    return (
        <CopyToClipboard
            text={`<${name} />`}
            onCopy={() => {
                alert(`复制成功 <${name} />`);
            }}
        >
            <div className="icon-wrapper">
                <div className="icon-wrapper-icon">{children}</div>
                <span className="icon-wrapper-name">{name}</span>
            </div>
        </CopyToClipboard>
    );
};

export default IconWrapper;

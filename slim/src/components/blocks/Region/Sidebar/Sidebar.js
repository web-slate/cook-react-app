import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import { useI18n } from '@google-clone/i18n';

// `Domain` Components.
import SidebarNav from './SidebarNav';
import useStyles from './Sidebar.style';

// Utils.
import { RoutePaths } from '@google-clone/utils';

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;
  const { formatMessage } = useI18n();

  const classes = useStyles();

  const pages = [
    {
      title: formatMessage({ id: 'dashboard' }),
      href: RoutePaths.dashboard,
      icon: '',
    },
    {
      title: formatMessage({ id: 'other_module' }),
      href: RoutePaths.dashboard,
      icon: '',
    }
  ];

  return (
    <Drawer variant={variant} onClose={onClose} open={open}>
      <div {...rest} className={`${classes.root} ${className}`}>
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;

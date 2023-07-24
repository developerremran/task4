import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  },
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }
];

const DropdownComponent = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleToggle = (item) => () => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [item.department]: !prevState[item.department],
      ...item.sub_departments.reduce((acc, subDept) => {
        acc[subDept] = !prevState[item.department];
        return acc;
      }, {})
    }));
  };

  const isDepartmentSelected = (department) => {
    return data.find(item => item.department === department)?.sub_departments.every(subDept => selectedItems[subDept]) || false;
  };

  return (
    <Box display='grid' style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr' }}>
      {data.map((item) => (
        <Accordion key={item.department} expanded={selectedItems[item.department]} onChange={handleToggle(item)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isDepartmentSelected(item.department)}
                  onChange={handleToggle(item)}
                  indeterminate={
                    !item.sub_departments.every(subDept => selectedItems[subDept]) &&
                    item.sub_departments.some(subDept => selectedItems[subDept])
                  }
                />
              }
              label={item.department}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {item.sub_departments.map(subDept => (
                <FormControlLabel
                  key={subDept}
                  control={
                    <Checkbox
                      checked={selectedItems[subDept]}
                      onChange={handleToggle({ department: item.department, sub_departments: [subDept] })}
                    />
                  }
                  label={subDept}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
export default DropdownComponent;

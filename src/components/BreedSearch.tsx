import { ConfigProvider, Select } from 'antd'
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { media, style } from 'typestyle';
import { colorBlack, colorWhite } from '../theme';

export const BreedSearch = () => {
    const { state } = useStore()

    const navigate = useNavigate();

    

    const onChange = (value: string) => {
        goToDetail(value)
    };
    
    const onSearch = (value: string) => {
        console.log('search:', value);
        
    };

    const goToDetail = (id:string) => {
        navigate(`/detail/${id}`);
      };
    
  return (
    <ConfigProvider
        theme={{
            components: {
                Select: {
                borderRadius: 59,
                colorBorder:'unset',
                colorTextPlaceholder:colorBlack.toString()
                },
            },
        }}
    >
    <Select
        showSearch
        className={heroInput}
        onChange={onChange}
        onSearch={onSearch}
        placeholder="Search"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={state.breedsOptions}
    />
    </ConfigProvider>
  )
}

const heroInput = style(
    {
        width: '91.621px',
        height: '30.705px',
        marginTop:'18px',
        flexShrink: 0,
        borderRadius: '59px',
        background: colorWhite.toString(),
        border:'unset',
        padding:'7px 13px'
    },
    media(
        {minWidth:768},
        {
            width: '294.616px',
            height: '49.67px',
        }
    ),
    media(
        {minWidth:1366},
        {
            width: '394.616px',
            height: '69.67px',
        }
    )
)
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
                    colorTextPlaceholder:colorBlack.toString(),
                    colorPrimaryHover:'#FFF',
                    optionSelectedBg:"#FFFF"
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
        suffixIcon={
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        }
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
        
    },
    media(
        {minWidth:768},
        {
            width: '294.616px',
            height: '49.67px',
            padding:'28px',
            marginTop:'32px'
        }
    ),
    media(
        {minWidth:1366},
        {
            width: '394.616px',
            height: '69.67px',
            marginTop:'52px'
        }
    )
)
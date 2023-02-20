export function Logomark(props) {
  return (
    <svg viewBox='0 0 40 40' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z'
      />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox='0 0 106 40' aria-hidden='true' {...props}>
      <Logomark width='40' height='40' className='fill-cyan-500' />
      <path
        className='fill-gray-900'
        d='M53.1477 26V14.3636H57.5114C58.4053 14.3636 59.1553 14.5303 59.7614 14.8636C60.3712 15.197 60.8314 15.6553 61.142 16.2386C61.4564 16.8182 61.6136 17.4773 61.6136 18.2159C61.6136 18.9621 61.4564 19.625 61.142 20.2045C60.8277 20.7841 60.3636 21.2405 59.75 21.5739C59.1364 21.9034 58.3807 22.0682 57.483 22.0682H54.5909V20.3352H57.1989C57.7216 20.3352 58.1496 20.2443 58.483 20.0625C58.8163 19.8807 59.0625 19.6307 59.2216 19.3125C59.3845 18.9943 59.4659 18.6288 59.4659 18.2159C59.4659 17.803 59.3845 17.4394 59.2216 17.125C59.0625 16.8106 58.8144 16.5663 58.4773 16.392C58.1439 16.214 57.714 16.125 57.1875 16.125H55.2557V26H53.1477ZM67.0355 26.1705C66.1832 26.1705 65.4446 25.983 64.8196 25.608C64.1946 25.233 63.7098 24.7083 63.3651 24.0341C63.0241 23.3598 62.8537 22.572 62.8537 21.6705C62.8537 20.7689 63.0241 19.9792 63.3651 19.3011C63.7098 18.6231 64.1946 18.0966 64.8196 17.7216C65.4446 17.3466 66.1832 17.1591 67.0355 17.1591C67.8878 17.1591 68.6264 17.3466 69.2514 17.7216C69.8764 18.0966 70.3594 18.6231 70.7003 19.3011C71.045 19.9792 71.2173 20.7689 71.2173 21.6705C71.2173 22.572 71.045 23.3598 70.7003 24.0341C70.3594 24.7083 69.8764 25.233 69.2514 25.608C68.6264 25.983 67.8878 26.1705 67.0355 26.1705ZM67.0469 24.5227C67.509 24.5227 67.8954 24.3958 68.206 24.142C68.5166 23.8845 68.7476 23.5398 68.8991 23.108C69.0545 22.6761 69.1321 22.1951 69.1321 21.6648C69.1321 21.1307 69.0545 20.6477 68.8991 20.2159C68.7476 19.7803 68.5166 19.4337 68.206 19.1761C67.8954 18.9186 67.509 18.7898 67.0469 18.7898C66.5734 18.7898 66.1795 18.9186 65.8651 19.1761C65.5545 19.4337 65.3215 19.7803 65.1662 20.2159C65.0147 20.6477 64.9389 21.1307 64.9389 21.6648C64.9389 22.1951 65.0147 22.6761 65.1662 23.108C65.3215 23.5398 65.5545 23.8845 65.8651 24.142C66.1795 24.3958 66.5734 24.5227 67.0469 24.5227ZM76.7699 26.1705C75.8987 26.1705 75.1506 25.9792 74.5256 25.5966C73.9044 25.214 73.4252 24.6856 73.0881 24.0114C72.7547 23.3333 72.5881 22.553 72.5881 21.6705C72.5881 20.7841 72.7585 20.0019 73.0994 19.3239C73.4403 18.642 73.9214 18.1117 74.5426 17.733C75.1676 17.3504 75.9063 17.1591 76.7585 17.1591C77.4669 17.1591 78.0938 17.2898 78.6392 17.5511C79.1884 17.8087 79.6259 18.1742 79.9517 18.6477C80.2775 19.1174 80.4631 19.6667 80.5085 20.2955H78.5426C78.4631 19.875 78.2737 19.5246 77.9744 19.2443C77.679 18.9602 77.2831 18.8182 76.7869 18.8182C76.3665 18.8182 75.9972 18.9318 75.679 19.1591C75.3608 19.3826 75.1127 19.7045 74.9347 20.125C74.7604 20.5455 74.6733 21.0492 74.6733 21.6364C74.6733 22.2311 74.7604 22.7424 74.9347 23.1705C75.1089 23.5947 75.3532 23.9223 75.6676 24.1534C75.9858 24.3807 76.3589 24.4943 76.7869 24.4943C77.09 24.4943 77.3608 24.4375 77.5994 24.3239C77.8419 24.2064 78.0445 24.0379 78.2074 23.8182C78.3703 23.5985 78.482 23.3314 78.5426 23.017H80.5085C80.4593 23.6345 80.2775 24.1818 79.9631 24.6591C79.6487 25.1326 79.2206 25.5038 78.679 25.7727C78.1373 26.0379 77.5009 26.1705 76.7699 26.1705ZM84.0724 23.2614L84.0668 20.7784H84.3963L87.5327 17.2727H89.9361L86.0781 21.5682H85.652L84.0724 23.2614ZM82.1974 26V14.3636H84.2543V26H82.1974ZM87.6747 26L84.8338 22.0284L86.2202 20.5795L90.1349 26H87.6747ZM94.8111 26.1705C93.9361 26.1705 93.1804 25.9886 92.544 25.625C91.9115 25.2576 91.4247 24.7386 91.0838 24.0682C90.7429 23.3939 90.5724 22.6004 90.5724 21.6875C90.5724 20.7898 90.7429 20.0019 91.0838 19.3239C91.4285 18.642 91.9096 18.1117 92.527 17.733C93.1444 17.3504 93.8698 17.1591 94.7031 17.1591C95.241 17.1591 95.7486 17.2462 96.2259 17.4205C96.7069 17.5909 97.1312 17.8561 97.4986 18.2159C97.8698 18.5758 98.1615 19.0341 98.3736 19.5909C98.5857 20.1439 98.6918 20.803 98.6918 21.5682V22.1989H91.5384V20.8125H96.7202C96.7164 20.4186 96.6312 20.0682 96.4645 19.7614C96.2978 19.4508 96.0649 19.2064 95.7656 19.0284C95.4702 18.8504 95.1255 18.7614 94.7315 18.7614C94.3111 18.7614 93.9418 18.8636 93.6236 19.0682C93.3054 19.2689 93.0573 19.5341 92.8793 19.8636C92.705 20.1894 92.616 20.5473 92.6122 20.9375V22.1477C92.6122 22.6553 92.705 23.0909 92.8906 23.4545C93.0762 23.8144 93.3357 24.0909 93.669 24.2841C94.0024 24.4735 94.3925 24.5682 94.8395 24.5682C95.1387 24.5682 95.4096 24.5265 95.652 24.4432C95.8944 24.3561 96.1046 24.2292 96.2827 24.0625C96.4607 23.8958 96.5952 23.6894 96.6861 23.4432L98.6065 23.6591C98.4853 24.1667 98.2543 24.6098 97.9134 24.9886C97.5762 25.3636 97.1444 25.6553 96.6179 25.8636C96.0914 26.0682 95.4891 26.1705 94.8111 26.1705ZM104.79 17.2727V18.8636H99.7727V17.2727H104.79ZM101.011 15.1818H103.068V23.375C103.068 23.6515 103.11 23.8636 103.193 24.0114C103.28 24.1553 103.394 24.2538 103.534 24.3068C103.674 24.3598 103.83 24.3864 104 24.3864C104.129 24.3864 104.246 24.3769 104.352 24.358C104.462 24.339 104.545 24.322 104.602 24.3068L104.949 25.9148C104.839 25.9527 104.682 25.9943 104.477 26.0398C104.277 26.0852 104.03 26.1117 103.739 26.1193C103.223 26.1345 102.759 26.0568 102.347 25.8864C101.934 25.7121 101.606 25.4432 101.364 25.0795C101.125 24.7159 101.008 24.2614 101.011 23.7159V15.1818Z'
      />
    </svg>
  )
}

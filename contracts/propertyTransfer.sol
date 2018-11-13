pragma solidity ^0.4.20;
contract PropertyTransfer {

    address public DA;
    uint public totalNoOfProperty;

    constructor() public {
        DA = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == DA);
        _;
    }

    struct Property{
        uint flour;
        string location;
        string name;
        bool isSold;
        uint price;
        string ownerName;
    }


    mapping(address => mapping(uint256=>Property)) public  propertiesOwner;
    mapping(address => uint256)  individualCountOfPropertyPerOwner;// how many property does a particular person hold

    event PropertyAlloted(address indexed _verifiedOwner, uint256 indexed  _totalNoOfPropertyCurrently, string _nameOfProperty, string _msg);
    event PropertyTransferred(address indexed _from, address indexed _to, string _propertyName, string _msg);
    event PropertySetPrice(string _propertyName, string _msg);

    /// this shall give us the exact property count which any address own at any point of time
    function getPropertyCountOfAnyAddress(address _ownerAddress) constant public returns (uint256){
        uint count=0;
        for(uint i =0; i<individualCountOfPropertyPerOwner[_ownerAddress];i++){
            if(propertiesOwner[_ownerAddress][i].isSold != true)
            count++;
        }
        return count;
    }

    /// this function shall be called by DA only after verification
    function allotProperty(address _verifiedOwner, uint _propertyLocationFlour,
    string _propertyLocation, string _propertyName, uint _propertyPrice, string _ownerName)
    onlyOwner public
    {
        //propertiesOwner[_verifiedOwner][individualCountOfPropertyPerOwner[_verifiedOwner]++].name = _propertyName;
        propertiesOwner[_verifiedOwner][individualCountOfPropertyPerOwner[_verifiedOwner]++] = Property(_propertyLocationFlour, _propertyLocation, _propertyName, false, _propertyPrice, _ownerName);
        totalNoOfProperty++;
        emit PropertyAlloted(_verifiedOwner,individualCountOfPropertyPerOwner[_verifiedOwner], _propertyName, "property allotted successfully");
    }

    /// check whether the owner have the said property or not. if yes, return the index
    function isOwner(address _checkOwnerAddress, string _propertyName) constant public returns (uint){
        uint i ;
        bool flag ;
        for(i=0 ; i<individualCountOfPropertyPerOwner[_checkOwnerAddress]; i++){
            if(propertiesOwner[_checkOwnerAddress][i].isSold == true){
                break;
            }
         flag = stringsEqual(propertiesOwner[_checkOwnerAddress][i].name,_propertyName);
            if(flag == true){
                break;
            }
        }
        if(flag == true){
            return i;
        }
        else {
            return 999999999;// We're expecting that no individual shall be owning this much properties
        }

    }

    /// functionality to check the equality of two strings in Solidity
    function stringsEqual (string a1, string a2) constant public returns (bool) {
            return keccak256(a1) == keccak256(a2)? true:false;
    }


    function transferProperty (address _to, string _propertyName) public
      returns (bool ,  uint )
    {
        uint256 checkOwner = isOwner(msg.sender, _propertyName);
        bool flag;

        if(checkOwner != 999999999 && propertiesOwner[msg.sender][checkOwner].isSold == false){
            /// step 1 . remove the property from the current owner and decrase the counter.
            /// step 2 . assign the property to the new owner and increase the counter
            propertiesOwner[msg.sender][checkOwner].isSold = true;
            propertiesOwner[msg.sender][checkOwner].name = "Sold";
            propertiesOwner[_to][individualCountOfPropertyPerOwner[_to]++].name = _propertyName;
            flag = true;
            emit PropertyTransferred(msg.sender , _to, _propertyName, "Owner has been changed." );
        }
        else {
            flag = false;
            emit PropertyTransferred(msg.sender , _to, _propertyName, "Owner doesn't own the property." );
        }
        return (flag, checkOwner);
    }

    // Set the price of Property
    function setPropertyCost(uint _price, string _propertyName) public{

        require(msg.sender != DA);
        uint256 checkOwner = isOwner(msg.sender, _propertyName);

        if(checkOwner != 999999999 && propertiesOwner[msg.sender][checkOwner].isSold == false){
        propertiesOwner[msg.sender][checkOwner].price = _price;
        emit PropertySetPrice(_propertyName, "Price update successfully" );
        }else{
            emit PropertySetPrice(_propertyName, "You can't update the price" );
        }
    }

    function kill() onlyOwner public  {
        selfdestruct(DA);
    }



}
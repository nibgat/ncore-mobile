import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    SelectBox as NCoreSelectBox,
    PageContainer,
    NCoreTheme,
    Button
} from "ncore-mobile";

const DATA = [
    {
        title: "Data 1",
        key: "d1"
    },
    {
        title: "Data 2",
        key: "d2"
    },
    {
        title: "Data 3",
        key: "d3"
    },
    {
        title: "Data 4",
        key: "d4"
    },
    {
        title: "Data 5",
        key: "d5"
    },
    {
        title: "Data 6",
        key: "d6"
    }
];

const SelectBox = () => {
    const {
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [isMultipleSelect, setIsMultipleSelect] = useState(false);
    const [isSearchable, setIsSearchable] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [maxChoice, setMaxChoice] = useState(4);
    const [minChoice, setMinChoice] = useState(2);

    return <PageContainer>
        <NCoreSelectBox
            itemLabelExtractor={(item) => item.title}
            multipleSelect={isMultipleSelect}
            keyExtractor={(item) => item.key}
            searchable={isSearchable}
            title="Select Box Title"
            minChoice={minChoice}
            maxChoice={maxChoice}
            disabled={isDisabled}
            initialData={DATA}
            onSearch={(searchText) => {
                if(searchText && searchText.length) {
                    return DATA.filter(item => item.title.match(searchText));
                } else {
                    return DATA;
                }
            }}
        />

        <View
            style={[
                stylesheet.seperator,
                {
                    backgroundColor: colors.seperator,
                    marginBottom: spaces.content * 2,
                    marginTop: spaces.content * 2
                }
            ]}
        />

        <Button
            title={`disabled = ${isDisabled ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsDisabled(!isDisabled);
            }}
        />
        <Button
            title={`searchable = ${isSearchable ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsSearchable(!isSearchable);
            }}
        />
        <Button
            title={`multipleSelect = ${isMultipleSelect ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsMultipleSelect(!isMultipleSelect);
            }}
        />
        <Button
            title={`maxChoice = ${maxChoice}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                let newCount = maxChoice + 1;

                if(newCount > DATA.length) {
                    newCount = 1;
                }

                if(minChoice > newCount) {
                    setMinChoice(0);
                }

                setMaxChoice(newCount);
            }}
        />
        <Button
            title={`minChoice = ${minChoice}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                let newCount = minChoice + 1;

                if(newCount > DATA.length) {
                    newCount = 0;
                }

                if(newCount > maxChoice) {
                    newCount = 0;
                }

                setMinChoice(newCount);
            }}
        />
    </PageContainer>;
};
export default SelectBox;

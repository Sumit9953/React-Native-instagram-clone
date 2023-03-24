import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {useForm, Controller , Control} from 'react-hook-form';
import user from '../../assets/data/user.json';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import { IUser } from '../../types/models';

type IEditableUserField = 'name' | 'username' | 'website' |'bio'
type IEditableUser = Pick<IUser , IEditableUserField >
interface ICustomInput {
  control: Control<IEditableUser , Object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  label,
  control,
  name,
  multiline = false,
  rules = {}
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur} , fieldState: {error}}) => {
    
    return ( 
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={{flex: 1}}>
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          style={[styles.input , {borderColor: error ? colors.red : colors.border}]}
          placeholder={label}
          multiline={multiline}
        />
        {error && <Text style={{color: colors.red}}>{error.type}</Text>}
        </View>
      </View>
    )}}
  />
);

const EditProfileScreen = () => {
  const {control, handleSubmit , formState: {errors} } = useForm<IEditableUser>();

  const onSubmit = (data : IEditableUser) => {
    console.log('submit' , data);
  };
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <CustomInput name="name" control={control} rules={{required : true}}  label="Name" />
      <CustomInput name="username" control={control} rules={{required: true}} label="Username" />
      <CustomInput name="website" control={control} rules={{required: true}} label="Website" />
      <CustomInput name="bio" control={control} rules={{required: true}} label="Bio" multiline />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semo,

    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
  },
});
export default EditProfileScreen;

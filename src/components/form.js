const Form = (props) => {
	return (
		<form>
			<label>
				Name
				<input value="Arthur Dent" />
			</label>
			<label>
				Answer to life, the universe, and everything
				<input type="number" value={42} />
			</label>
		</form>
	);
};
export default Form;
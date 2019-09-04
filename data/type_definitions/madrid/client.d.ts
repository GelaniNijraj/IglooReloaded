	/**
	 * You can use CustomEvent API to show qualified embedded help in the right sidebar.
    * See Use embedded help qualifiers for more information.
	 */
	declare class CustomEvent {
		/**
		 * Show the embedded-help content specified by the qualifier parameter in the right sidebar.
		 * @event The event to send. Must be the string "embedded_help:load_embedded_help"
		 * @qualifier The qualifier name created in the Embedded Help application.
		 */
		fireAll(event: String, qualifier: String): void;

	}
	/**
	 * The GlideAjax class enables a client script to call server-side code in a script include.
    * To use GlideAjax in a client script, follow these general steps. Create a GlideAjax instance by calling the GlideAjax constructor. As the argument to the constructor, specify the name of the script include class that contains the method you want to call. Call the addParam method with the sysparm_name parameter and the name of the script-include method you want to call. (Optional) Call the addParam method one or more times to provide the script-include code with other parameters it needs. Execute the server-side code by calling getXML(). Note: getXML() is the preferred method for executing the code, because it is asynchronous and does not hold up the execution of other client code. Another method, getXMLWait(), is also available but is not recommended. Using getXMLWait() ensures the order of execution, but can cause the application to seem unresponsive, significantly degrading the user experience of any application that uses it. getXMLWait() is not available to scoped applications.
	 */
	declare class GlideAjax {
		/**
		 * Constructor for GlideAjax.
		 * @class_name The name of the server-side class that contains the method you want to execute.
		 */
		constructor(class_name: String);

		/**
		 * Specifies a parameter name and value to be passed to the server-side function associated with this GlideAjax object.
		 * @parm_name The name of the parameter to pass. (The name must begin with the sysparm_.)
		 * @parm_value The value to assign to parm_name.
		 */
		addParam(parm_name: String, parm_value: String): void;

		/**
		 * Retrieves the results from a server-side method called from the client via getXMLWait().
		 */
		getAnswer(): void;

		/**
		 * Sends the server a request to execute the method and parameters associated with this GlideAjax object.
		 * @callback The name of the callback function to process the results returned by the server.
		 */
		getXML(callback: Function): void;

		/**
		 * Call the processor asynchronously and get the answer element of the response in XML format.
		 * @callback The callback function. The function receives the answer element of the response in XML format as an argument.
		 */
		getXMLAnswer(callback: Function): void;

		/**
		 * Sends the server a request to execute the method and parameters associated with this GlideAjax object.
		 */
		getXMLWait(): void;

	}
	/**
	 * The GlideAjaxV3 API provides the ability to asynchronously execute server-side scripts from a client-side script.
    * The GlideAjaxV3 API can be used in client-side scripts using ListV2 and ListV3 APIs.
	 */
	declare class GlideAjaxV3 {
		/**
		 * Creates an instance of the GlideAjaxV3 class.
		 * @processor The name of the processor (server-side script) to call.
		 */
		constructor(processor: String): void;

		/**
		 * Creates an instance of the GlideAjaxV3 class.
		 * @processor The name of the processor (server-side script) to call.
		 * @targetURL (Optional) Override the xmlhttp processor url. If this parameter is not specified, the default is xmlhttp.do.
		 */
		constructor(processor: String, targetURL: String): void;

		/**
		 * Set a name-value pair to be sent to the processor.
		 * @name The name of the parameter. This usually has the prefix 'sysparm_'.
		 * @value The parameter value.
		 */
		addParam(name: String, value: String): void;

		/**
		 * Call the processor asynchronously and get the answer element of the response in JSON format.
		 * @callback The callback function. The function receives the answer element of the response as a JSON object.
		 */
		getJSON(callback: Function): void;

		/**
		 * Returns the value of the specified parameter.
		 * @name The name of the parameter to return.
		 */
		getParam(name: String): String;

		/**
		 * Returns the name-value pairs for the request.
		 */
		getParams(): Object;

		/**
		 * Returns the server-side script that the request is going to use.
		 */
		getProcessor(): String;

		/**
		 * Returns the target URL.
		 */
		getURL(): String;

		/**
		 * Call the processor asynchronously and get the response in XML format.
		 * @callback The callback function. The function receives the response as an argument.
		 */
		getXML(callback: Function): void;

		/**
		 * Call the processor asynchronously and get the answer element of the response in XML format.
		 * @callback The callback function. The function receives the answer element of the response in XML format as an argument.
		 */
		getXMLAnswer(callback: Function): void;

		/**
		 * Sets a callback function to be called if the Ajax request fails.
		 * @callback The function to be called if the Ajax request fails. The callback function has one parameter, the XMLHttpRequest object.
		 */
		setErrorCallback(callback: Function): void;

		/**
		 * Sets the request's server-side script. The server-side script is also called the processor.
		 * @serverScript The server-side script (processor) to receive the request.
		 */
		setProcessor(serverScript: String): void;

	}
	/**
	 * The GlideDialogWindow API provides methods for displaying a dialog in the current window and frame.
    * Use these methods in scripts anywhere that you can use a client-side JavaScript. These methods are most often called from a UI action with the Client check box selected. Note: This API has been deprecated, use the GlideModalV3 API instead.
	 */
	declare class GlideDialogWindow {
		/**
		 * Provides methods for displaying a dialog in the current window and frame.
		 * @id Name of the UI page to load into the dialog window.
		 * @readOnly Optional. Flag that indicates whether the dialog window is read only (true) or read/write (false). Default: false
		 * @width Optional. Size (in pixels) to set the width of the dialog window.
		 * @height Optional. Size (in pixels) to set the height of the dialog window.
		 */
		constructor(id: String, readOnly: Boolean, width: Number, height: Number): void;

		/**
		 * Adjusts the body height of a dialog window to be the window height minus the header height.
		 */
		adjustBodySize(): void;

		/**
		 * Closes the dialog window.
		 */
		destroy(): void;

		/**
		 * Renders the dialog window.
		 */
		render(): void;

		/**
		 * Sets a given window property to a specified value.
		 * @name The window property to set.
		 * @value The value for the window property.
		 */
		setPreference(name: String, value: String): void;

		/**
		 * Sets the size of the dialog window.
		 * @width The width of the dialog window.
		 * @height The height of the dialog window.
		 */
		setSize(width: Number, height: Number): void;

		/**
		 * Sets the title of the dialog window.
		 * @title The title for the current window.
		 */
		setTitle(title: String): void;

	}
	/**
	 * The GlideDocument class provides the ability to search a DOM element, a document, or a JQuery element.
    * The GlideDocumentV3 API can be used in client-side scripts using ListV2 and ListV3 APIs. The GlideDocument APIs are accessed using the g_document global object.
	 */
	declare class GlideDocumentV3 {
		/**
		 * Returns a node found in the specified DOM based context or created from the HTML context.
		 * @selector The selector expression
		 * @context (Optional) A DOM Element, document, or JQuery object to be searched.
		 */
		getElement(selector: StringorObject, context: StringorObject): node;

		/**
		 * Returns a node list found in the specified DOM based context or created if an HTML context is specified.
		 * @selector The selector expression
		 * @context (Optional) A DOM Element, document, or JQuery object to be searched.
		 */
		getElements(selector: StringorObject, context: StringorObject): nodelist;

	}
	/**
	 * Use the GlideFlow JavaScript API for client-side interactions with actions, flows, and subflows.
    * Use the GlideFlow API anywhere in the platform that accepts client scripts. The action, flow, or subflow must be set as client callable, and have a valid ACL using the Manage Security feature in Flow designer. Some of the methods within GlideFlow return promise objects. A promise represents the eventual result of an asynchronous operation. For more information on promises, see Promise - Javascript MDN or AngularJS documentation. Using this API, you can: Start actions, flows, or subflows via a script. Get an existing execution. Get the status and any available outputs. Wait for the completion of an action, flow, or subflow. There is no constructor for the GlideFlow class. Access GlideFlow methods using the GlideFlow global object.
	 */
	declare class GlideFlow {
		/**
		 * Returns a completion object for the execution.
		 */
		awaitCompletion(): Object;

		/**
		 * Returns a string containing the execution status of the current execution.
		 */
		getExecutionStatus(): String;

		/**
		 * Returns an outputs object for the execution.
		 */
		getOutputs(): Object;

		/**
		 * Get an existing execution instance by ID.
		 * @executionId The ID of the execution to be retrieved.
		 */
		getExecution(executionId: String): Object;

		/**
		 * Start an action.
		 * @scopedName The scoped name of the flow to be executed.
		 * @inputs An object containing inputs defined for the action.
		 */
		startAction(scopedName: String, inputs: Object): Object;

		/**
		 * Start a flow.
		 * @scopedName The scoped name of the flow to be executed.
		 * @inputs An object containing inputs defined for the flow.
		 */
		startFlow(scopedName: String, inputs: Object): Object;

		/**
		 * Start a subflow.
		 * @scopedName The scoped name of the flow to be executed.
		 * @inputs An object containing inputs used for the subflow.
		 */
		startSubflow(scopedName: String, inputs: Object): Object;

	}
	/**
	 * The GlideForm API provides methods to customize forms. GlideForm.js is the JavaScript class containing the methods. The global object g_form is used to access GlideForm methods. GlideForm methods are only used on the client.
    * These methods are used to make custom changes to the form view of records. All validation of examples was done using Client Scripts. Some of these methods can also be used in other client scripts (such as Catalog Client Scripts or Wizard Client Scripts), but must first be tested to determine whether they will work as expected. Note: The methods getControl(), getHelpTextControl(), getElement(), and getFormElement() are deprecated for mobile devices. For information on using GlideForm for mobile, see Mobile Client GlideForm (g_form) Scripting and Migration. There is no constructor for the GlideForm class. Access GlideForm methods using the g_form global object.
	 */
	declare class GlideForm {
		/**
		 * Adds an icon on a field’s label.
		 * @fieldName The field name.
		 * @icon The font icon to show next to the field. Supported icons - icon-user, icon-user-group, icon-lightbulb, icon-home, icon-mobile, icon-comment, icon-mail, icon-locked, icon-database, icon-book, icon-drawer, icon-folder, icon-catalog, icon-tab, icon-cards, icon-tree-right, icon-tree, icon-book-open, icon-paperclip, icon-edit, icon-trash, icon-image, icon-search, icon-power, icon-cog, icon-star, icon-star-empty, icon-new-ticket, icon-dashboard, icon-cart-full, icon-view, icon-label, icon-filter, icon-calendar, icon-script, icon-add, icon-delete, icon-help, icon-info, icon-check-circle, icon-alert, icon-sort-ascending, icon-console, icon-list, icon-form, and icon-livefeed.
		 * @title The text title for the icon.
		 */
		addDecoration(fieldName: String, icon: String, title: String): void;

		/**
		 * Adds an icon on a field’s label.
		 * @fieldName The field name.
		 * @icon The font icon to show next to the field. Supported icons - icon-user, icon-user-group, icon-lightbulb, icon-home, icon-mobile, icon-comment, icon-mail, icon-locked, icon-database, icon-book, icon-drawer, icon-folder, icon-catalog, icon-tab, icon-cards, icon-tree-right, icon-tree, icon-book-open, icon-paperclip, icon-edit, icon-trash, icon-image, icon-search, icon-power, icon-cog, icon-star, icon-star-empty, icon-new-ticket, icon-dashboard, icon-cart-full, icon-view, icon-label, icon-filter, icon-calendar, icon-script, icon-add, icon-delete, icon-help, icon-info, icon-check-circle, icon-alert, icon-sort-ascending, icon-console, icon-list, icon-form, and icon-livefeed.
		 * @title The text title for the icon.
		 * @color A CSS color.
		 */
		addDecoration(fieldName: String, icon: String, title: String, color: String): void;

		/**
		 * Displays the error message at the top of the form.
		 * @message The message to display.
		 */
		addErrorMessage(message: String): void;

		/**
		 * Adds an informational message to the top of the form.
		 * @message The message to display.
		 */
		addInfoMessage(message: String): void;

		/**
		 * Adds a choice to the end of a choice list field.
		 * @fieldName The name of the field.
		 * @choiceValue The value to be stored in the database.
		 * @choiceLabel The value displayed.
		 */
		addOption(fieldName: String, choiceValue: String, choiceLabel: String): void;

		/**
		 * Adds a choice to the choice list field at the position specified.
		 * @fieldName The field name.
		 * @choiceValue The value stored in the database.
		 * @choiceLabel The value displayed.
		 * @choiceIndex Order of the choice in the list. The index is into a zero based array.
		 */
		addOption(fieldName: String, choiceValue: String, choiceLabel: String, choiceIndex: Number): void;

		/**
		 * Removes all informational and error messages from the top of the form.
		 */
		clearMessages(): void;

		/**
		 * Removes all options from the choice list.
		 * @fieldName Name of the field.
		 */
		clearOptions(fieldName: String): void;

		/**
		 * Removes any value(s) from the field.
		 * @fieldName Name of the field.
		 */
		clearValue(fieldName: String): void;

		/**
		 * Prevents file attachments from being added.
		 */
		disableAttachments(): void;

		/**
		 * Allows file attachments to be added. Shows the paper clip icon.
		 */
		enableAttachments(): void;

		/**
		 * Used to draw attention to a particular field. Flashes the specified color for a specified duration of time in the specified field.
		 * @fieldName Specifies the field to highlight in the following format:".".
		 * @color RGB color or acceptable CSS color.
		 * @count Specifies how long the label will flash. Options include: 2: Flashes for 1 second 0: Flashes for 2 seconds -2: Flashes for 3 seconds -4: Flashes for 4 seconds
		 */
		flash(fieldName: String, color: String, count: Number): void;

		/**
		 * Returns the most recent action name, or, for a client script, the sys_id of the UI action clicked.
		 */
		getActionName(): String;

		/**
		 * Returns a Boolean value for the specified field.
		 * @fieldName Name of the field.
		 */
		getBooleanValue(fieldName: String): Boolean;

		/**
		 * Returns the HTML element for the specified field.
		 * @fieldName Name of the field.
		 */
		getControl(fieldName: String): HTMLElement;

		/**
		 * Returns the decimal value of the specified field.
		 * @fieldName The name of the field.
		 */
		getDecimalValue(fieldName: String): String;

		/**
		 * Returns the HTML element specified by the parameter.
		 * @id The field id.
		 */
		getElement(id: String): HTMLElement;

		/**
		 * Returns the HTML element for the form.
		 */
		getFormElement(): HTMLFormElement;

		/**
		 * Returns the HTML element of the help text for the specified field.
		 * @fieldName Name of the field.
		 */
		getHelpTextControl(fieldName: String): HTMLElement;

		/**
		 * Returns the integer value of the field.
		 * @fieldName The field name.
		 */
		getIntValue(fieldName: String): Number;

		/**
		 * Returns the plain text value of the field label.
		 * @fieldName The field name
		 */
		getLabelOf(fieldName: String): String;

		/**
		 * Returns the option element for a selected box named fieldName where choiceValue matches the option value.
		 * @fieldName Name of the field.
		 * @choiceValue Value of the option.
		 */
		getOption(fieldName: String, choiceValue: String): HTMLElement;

		/**
		 * Returns the GlideRecord for a specified field.
		 * @fieldName Name of the field.
		 * @callBack Name of the call back function.
		 */
		getReference(fieldName: String, callBack: Function): GlideRecord;

		/**
		 * Returns all section names, whether visible or not.
		 */
		getSectionNames(): Arrayofstrings;

		/**
		 * Returns an array of the form's sections.
		 */
		getSections(): ArrayofHTMLelements;

		/**
		 * Returns the name of the table to which this record belongs.
		 */
		getTableName(): String;

		/**
		 * Returns the sys_id of the record displayed in the form.
		 */
		getUniqueValue(): String;

		/**
		 * Returns the value of the specified field.
		 * @fieldName The field name.
		 */
		getValue(fieldName: String): String;

		/**
		 * Hides all field messages.
		 */
		hideAllFieldMsgs(): void;

		/**
		 * Hides all field messages of the specified type.
		 * @type The type of message, info or error.
		 */
		hideAllFieldMsgs(type: String): void;

		/**
		 * Hides the error message placed by showErrorBox().
		 * @fieldName The name of the field or control.
		 */
		hideErrorBox(fieldName: String): void;

		/**
		 * Hides the last message placed by showFieldMsg().
		 * @fieldName Name of the field.
		 */
		hideFieldMsg(fieldName: String): void;

		/**
		 * Hides the messages placed by showFieldMsg().
		 * @fieldName Name of the field.
		 * @clearAll When true, all messages for the field are cleared. When false, only the last message is removed.
		 */
		hideFieldMsg(fieldName: String, clearAll: Boolean): void;

		/**
		 * Hides the specified related list on the form.
		 * @listTableName Name of the related list. Use the sys_id to hide a list through a relationship.
		 */
		hideRelatedList(listTableName: String): void;

		/**
		 * Hides all related lists on the form.
		 */
		hideRelatedLists(): void;

		/**
		 * Returns true while a live update is being done on the record the form is showing.
		 */
		isLiveUpdating(): Boolean;

		/**
		 * Returns true if the field is mandatory.
		 * @fieldName Name of the field.
		 */
		isMandatory(fieldName: String): Boolean;

		/**
		 * Returns true if the record has never been saved.
		 */
		isNewRecord(): Boolean;

		/**
		 * Returns true if the section is visible.
		 */
		isSectionVisible(): Boolean;

		/**
		 * You can update a list collector variable.
		 * @fieldName Name of the slush bucket.
		 */
		refreshSlushbucket(fieldName: String): void;

		/**
		 * Removes the icon from the specified field that matches the icon and title.
		 * @fieldName Field name.
		 * @icon Name of the icon to remove.
		 * @title The icon's text title (name).
		 */
		removeDecoration(fieldName: String, icon: String, title: String): void;

		/**
		 * Removes the icon from the specified field that matches the icon, title, and color.
		 * @fieldName Field name.
		 * @icon Name of the icon to remove.
		 * @title The icon's text title (name).
		 * @color A CSS color
		 */
		removeDecoration(fieldName: String, icon: String, title: String, color: String): void;

		/**
		 * Removes the specified option from the choice list.
		 * @fieldName Name of the field.
		 * @choiceValue The value stored in the database. This is not the label.
		 */
		removeOption(fieldName: String, choiceValue: String): void;

		/**
		 * Saves the record without navigating away (update and stay).
		 */
		save(): void;

		/**
		 * Makes the specified field available or unavailable.
		 * @fieldName Name of the field.
		 * @disable When true disables the field. When false enables the field.
		 */
		setDisabled(fieldName: String, disable: Boolean): void;

		/**
		 * Displays or hides a field.
		 * @fieldname Name of the field.
		 * @display When true displays the field, when false hides the field.
		 */
		setDisplay(fieldname: String, display: Boolean): void;

		/**
		 * Sets the plain text value of the field label.
		 * @fieldName The field name.
		 * @label The field text label.
		 */
		setLabelOf(fieldName: String, label: String): void;

		/**
		 * Makes the specified field mandatory.
		 * @fieldName Name of the field.
		 * @mandatory When true makes the field mandatory. When false makes the field optional.
		 */
		setMandatory(fieldName: String, mandatory: Boolean): void;

		/**
		 * Makes the specified field read only or editable.
		 * @fieldName Name of the field.
		 * @readOnly When true makes the field read only. When false makes the field editable.
		 */
		setReadOnly(fieldName: String, readOnly: Boolean): void;

		/**
		 * Shows or hides a section.
		 * @sectionName The section name is lower case with an underscore replacing the first space in the name, and with the remaining spaces being removed, for example "Section Four is Here" becomes "section_fourishere". Other non-alphanumeric characters, such as ampersand (&), are removed. Section names can be found by using the getSectionNames() method.
		 * @display When true shows the section. When false hides the section.
		 */
		setSectionDisplay(sectionName: String, display: Boolean): Boolean;

		/**
		 * Sets the value of a field.
		 * @fieldName Name of the field.
		 * @value Value in the database.
		 */
		setValue(fieldName: String, value: String): void;

		/**
		 * Sets the value and display value of the specified field.
		 * @fieldName Name of the field.
		 * @value System ID for the reference value in the database. Can be an array of system IDs if the field is a glide-list.
		 * @displayValue Display name for the referenced value in the database. Can be an array of display names if the field is a glide-list.
		 */
		setValue(fieldName: String, value: String, displayValue: String): void;

		/**
		 * Displays or hides the field.
		 * @fieldName The field name.
		 * @display When true displays the field. When false hides the field.
		 */
		setVisible(fieldName: String, display: Boolean): void;

		/**
		 * Displays an error message under the specified form field (either a control object or the name of the field). If the control or field is currently off the screen, the form scrolls to the control or field.
		 * @name The name of the control or field.
		 * @message The message to be displayed.
		 */
		showErrorBox(name: String, message: String): void;

		/**
		 * Displays an error message under the specified form field (either a control object or the name of the field). If the control or field is currently off the screen and the scrollForm parameter is true, the form scrolls to the control or field.
		 * @name Name of the field or control.
		 * @message Message to display.
		 * @scrollForm When true scrolls the form to the field. When false the form does not scroll to the field.
		 */
		showErrorBox(name: String, message: String, scrollForm: Boolean): void;

		/**
		 * Displays either an informational or error message under the specified form field (either a control object or the name of the field). If the control or field is off the screen, the form is scrolled to the field.
		 * @field Name of the field or control.
		 * @message Message to display.
		 * @type "error","info", or "warning".
		 */
		showFieldMsg(field: String, message: String, type: String): void;

		/**
		 * Displays either an informational or error message under the specified form field (either a control object or the name of the field). If the control or field is currently off the screen and scrollForm is true, the form is scrolled to the field.
		 * @field Name of the field or control.
		 * @message Message to display.
		 * @type "error","info", or "warning".
		 * @scrollForm When true, the form scrolls to the field if it is off screen. When false, the form does not scroll.
		 */
		showFieldMsg(field: String, message: String, type: String, scrollForm: Boolean): void;

		/**
		 * Displays the specified related list on the form.
		 * @listTableName Name of the related list.
		 */
		showRelatedList(listTableName: String): void;

		/**
		 * Displays all the form's related lists.
		 */
		showRelatedLists(): void;

		/**
		 * Saves the record.
		 */
		submit(): void;

		/**
		 * Performs the UI action specified by the parameter.
		 * @verb An action_name from a sys_ui_action record. The action name must be for a visible form button.
		 */
		submit(verb: String): void;

	}
	/**
	 * You can create a globally unique identifier.
    * You access the GlideGuidV3 methods using the g_guid global object.
	 */
	declare class GlideGuidV3 {
		/**
		 * Creates a globally unique identifier 32 characters long, or as specified with the optional length argument.
		 * @stringLength The desired string length, must be between 1 and 32 inclusive. This parameter is optional. If not specified, the returned string will be 32 characters long.
		 */
		generate(stringLength: Number): String;

	}
	/**
	 * GlideList2 is a JavaScript class used to customize (v2) lists.
    * The variable g_list is used to access a specified list object. The g_list variable is not available to the related lists form link UI action. It is available to the lists form link UI action. These methods are used in UI Context Menus and UI Actions.
	 */
	declare class GlideList2 {
		/**
		 * Adds a single term to the list query filter.
		 * @filter Query string condition to add.
		 */
		addFilter(filter: String): void;

		/**
		 * Returns the GlideList2 object for the list that contains the specified item.
		 * @DOMelement The DOM element ID for the list for which you want the GlideList2 object.
		 */
		get(DOMelement: Object): Object;

		/**
		 * Returns the GlideList2 object for the list specified.
		 * @ListID The list ID for which you want the GlideList2 object.
		 */
		get(ListID: String): Object;

		/**
		 * Returns a comma-separated list of the sys_ids for the items that are checked in the list.
		 */
		getChecked(): String;

		/**
		 * Returns the sysparm_fixed query.
		 */
		getFixedQuery(): String;

		/**
		 * Returns the field or comma-separated list of fields that are used to group the list.
		 */
		getGroupBy(): String;

		/**
		 * Returns the name of the list, which is usually the table name.
		 */
		getListName(): String;

		/**
		 * Returns the first field used to order the list.
		 */
		getOrderBy(): String;

		/**
		 * Returns the name of the parent table for a related list (the table associated with the form).
		 */
		getParentTable(): String;

		/**
		 * Returns the encoded query string for the list.
		 * @orderBy (Optional) If true, includes the orderBy in the encoded query string.
		 * @groupBy (Optional) If true, includes the groupBy in the encoded query string.
		 * @fixed (Optional) If true, includes fixed query in the encoded query string.
		 * @all (Optional) If true, includes orderBy, groupBy, and fixed query.
		 */
		getQuery(orderBy: Boolean, groupBy: Boolean, fixed: Boolean, all: Boolean): String;

		/**
		 * Returns the related list field that associates the related list to the parent form.
		 */
		getRelated(): String;

		/**
		 * Returns the table name for the list.
		 */
		getTableName(): String;

		/**
		 * Returns the list title.
		 */
		getTitle(): String;

		/**
		 * Returns the view used to display the list.
		 */
		getView(): String;

		/**
		 * Returns true if the list has been personalized by the user by choosing the list mechanic and changing the list layout.
		 */
		isUserList(): Boolean;

		/**
		 * Refreshes the list. The orderBy part of the list filter is ignored so that the list uses its natural ordering when it is refreshed.
		 * @firstRow (Optional) The first row to appear in the list. If not specified, the first row of the current is used.
		 * @additionalParms (Optional) name-value pairs that are submitted with the list refresh request.
		 */
		refresh(firstRow: Number, additionalParms: String): void;

		/**
		 * Refreshes the list. The orderBy part of the list filter is included if it is specified for the list.
		 * @firstRow (Optional) The first row to appear in the list.
		 * @description (Optional) name=value pairs that are submitted with the list refresh request.
		 */
		refreshWithOrderBy(firstRow: Number, description: String): void;

		/**
		 * Sets the encoded query string for the list, ignoring the orderBy and groupBy parts of the query string.
		 * @filter Encoded query string.
		 */
		setFilter(filter: String): void;

		/**
		 * Sets the encoded query string for the list, including the orderBy and groupBy if specified, and then refreshes the list using the new filter.
		 * @filter Encoded query string.
		 */
		setFilterAndRefresh(filter: String): void;

		/**
		 * Sets the first row that appears in the list when the list is refreshed.
		 * @rowNum Row number of the first row to display.
		 */
		setFirstRow(rowNum: Number): void;

		/**
		 * Sets the groupBy criteria for the list, for a single field or multiple fields.
		 * @groupBy The groupBy criteria for the list.
		 */
		setGroupBy(groupBy: String): void;

		/**
		 * Sets the orderBy criteria for the list.
		 * @orderBy Single or multiple order by fields.
		 */
		setOrderBy(orderBy: String): void;

		/**
		 * Sets the number of rows per page to display.
		 * @rows The number of rows to display
		 */
		setRowsPerPage(rows: Number): void;

		/**
		 * Shows or hides all the groups within the list and saves the current collapsed/expanded state of the groups as a user preference.
		 * @showFlag If true, shows the groups within the list.
		 */
		showHideGroups(showFlag: Boolean): void;

		/**
		 * Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference.
		 * @showFlag If true, displays the list.
		 */
		showHideList(showFlag: Boolean): void;

		/**
		 * Sorts the list in ascending order and saves the choice.
		 * @field Specifies the field used to sort the list.
		 */
		sort(field: String): void;

		/**
		 * Sorts the list in descending order and saves the choice.
		 * @field Specifies the field used to sort the list.
		 */
		sortDescending(field: String): void;

		/**
		 * Toggles the display of the list and saves the current collapsed/expanded state of the list as a user preference.
		 */
		toggleList(): void;

		/**
		 * Toggles the display of the list but does not save the current collapsed/expanded state of the list as a user preference.
		 */
		toggleListNoPref(): void;

	}
	/**
	 * Use GlideListV3 to manipulate lists.
    * You access the GlideListV3 methods by using the g_list global object. These methods are used in UI context menus and UI actions. The g_list object is not available for related lists on the form link UI action.
	 */
	declare class GlideListV3 {
		/**
		 * Adds a single term to the list query filter.
		 * @filter Query string condition to add.
		 */
		addFilter(filter: String): void;

		/**
		 * Returns the GlideList object for the specified DOM element.
		 * @DomElement The DOM element ID for which you want the GlideList object.
		 */
		get(DomElement: Object): Object;

		/**
		 * Returns the GlideList object for specified list.
		 * @listId The list name.
		 */
		get(listId: String): Object;

		/**
		 * Returns a comma-separated list of sys_ids for checked items in the list. Does not return items that are not allowed to be executed.
		 */
		getChecked(): String;

		/**
		 * Returns the sysparm_fixed query.
		 */
		getFixedQuery(): String;

		/**
		 * Returns the form's target attribute.
		 */
		getFormTarget(): String;

		/**
		 * Returns the field or comma-separated list of fields that are used to group the list.
		 */
		getGroupBy(): String;

		/**
		 * Returns the name of the list, which is usually the table name.
		 */
		getListName(): String;

		/**
		 * Returns the first field used to order the list.
		 */
		getOrderBy(): String;

		/**
		 * Returns the name of the parent table (the table associated with the form).
		 */
		getParentTable(): String;

		/**
		 * Returns the encoded query string for the list.
		 * @options The options can be one or more of the following. orderby - include ORDERBY in the query groupby - include GROUPBY in the query fixed - include sysparm_fixed_query in the query all - include all the options in the query
		 */
		getQuery(options: Object): String;

		/**
		 * Returns the referring URL.
		 */
		getReferringUrl(): String;

		/**
		 * Returns the related list field that associates the related list to the parent form.
		 */
		getRelated(): String;

		/**
		 * Returns the related list type.
		 */
		getRelatedListType(): String;

		/**
		 * Returns the relationship record id, if this is type REL related list.
		 */
		getRelationshipId(): String;

		/**
		 * Returns the number of rows returned by the query.
		 */
		getRowCount(): Number;

		/**
		 * Returns the number of rows to be displayed on a page.
		 */
		getRowsPerPage(): Number;

		/**
		 * Returns the table name of the list.
		 */
		getTableName(): String;

		/**
		 * Returns the list title.
		 */
		getTitle(): String;

		/**
		 * Returns the view used to display the list.
		 */
		getView(): String;

		/**
		 * Returns true if the list has been personalized by the user.
		 */
		isUserList(): Boolean;

		/**
		 * Refreshes the list. The orderBy part of the list filter is ignored so that the list's natural ordering is used.
		 * @firstRow (Optional) The first row to display in the list. If not specified, the list's current first row is used.
		 * @additionalParams (Optional) Name- value pairs that are submitted with the list refresh request.
		 */
		refresh(firstRow: Number, additionalParams: Object): void;

		/**
		 * Refreshes the list using the orderBy fields.
		 * @firstRow (Optional) The first row to display in the list. If not specified, the list's current first row is used.
		 * @additionalParams (Optional) Name- value pairs that are submitted with the list refresh request.
		 */
		refreshWithOrderBy(firstRow: Number, additionalParams: Object): void;

		/**
		 * Sets the encoded query string for the list ignoring the orderBy and groupBy parts of the query string.
		 * @filter An encoded query string.
		 * @saveOrderBy The default is false. When true uses the orderBy part of the query.
		 * @saveGroupBy The default is false. When true uses the groupBy part of the query.
		 */
		setFilter(filter: String, saveOrderBy: Boolean, saveGroupBy: Boolean): void;

		/**
		 * Sets the encoded query string for the list, and then refreshes the list using the new filter.
		 * @filter Encoded query string.
		 */
		setFilterAndRefresh(filter: String): void;

		/**
		 * Sets the first row to be displayed when the list is refreshed.
		 * @firstRow The row number in the list.
		 */
		setFirstRow(firstRow: Number): void;

		/**
		 * Specifies where to display the response from the form.
		 * @target The form.target attribute value to use.
		 */
		setFormTarget(target: String): void;

		/**
		 * Sets the groupBy criteria for the list, for a single field or multiple fields.
		 * @String The group by criteria for the list.
		 */
		setGroupBy(String: groupBy): void;

		/**
		 * Sets the orderBy criteria for the list.
		 * @orderBy Single or multiple order by fields.
		 */
		setOrderBy(orderBy: String): void;

		/**
		 * Sets the parent form referring url.
		 * @url The parent form's URL
		 */
		setReferringUrl(url: String): void;

		/**
		 * Set the number of rows to display on a page.
		 * @numRows The number of rows to display on a page.
		 */
		setRowsPerPage(numRows: Number): void;

		/**
		 * Displays or hides all of the groups within the list and saves the current collapsed/expanded state of the groups as a user preference.
		 * @showFlag When true, displays the groups within the list.
		 */
		showHideGroups(showFlag: Boolean): void;

		/**
		 * Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference.
		 * @showFlag When true, displays the list.
		 */
		showHideList(showFlag: Boolean): void;

		/**
		 * Sort the list in ascending order.
		 * @field The field to be used to sort the list.
		 */
		sort(field: String): void;

		/**
		 * Sorts the list in descending order.
		 * @field The field used to sort the list.
		 */
		sortDescending(field: String): void;

		/**
		 * Toggles the list display between collapsed and expanded, and saves the state as a user preference.
		 */
		toggleList(): void;

		/**
		 * Toggles the list display between collapsed and expanded, but does not save the state as a user preference.
		 */
		toggleListNoPref(): void;

	}
	/**
	 * GlideMenu methods are used in UI Context Menus, in the onShow scripts to customize UI Context Menu items.
    * There is no constructor for the GlideMenu class. Access GlideMenu methods using the g_menu global object. g_menu is the UI Context Menu that is about to be shown. The onShow script can make changes to the appearance of the menu before it is displayed using these methods. g_item is the current UI Context Menu item that is about to be shown. It is used in several of the g_menu methods to specify an item.
	 */
	declare class GlideMenu {
		/**
		 * Clears the image for an item.
		 * @item Specifies the item to have its image removed from display.
		 */
		clearImage(item: GlideMenuItem): void;

		/**
		 * Clears any selection images from items in the menu.
		 */
		clearSelected(): void;

		/**
		 * Returns a menu item by item ID.
		 * @itemID Specifies the item to be returned.
		 */
		getItem(itemID: String): GlideMenuItem;

		/**
		 * Disables a menu item so that it cannot be selected. The disabled menu item is displayed in a lighter color (grayed out) to indicate it is disabled.
		 * @item The item to be disabled.
		 */
		setDisabled(item: GlideMenuItem): void;

		/**
		 * Enables the specified menu item.
		 * @item The item to be enabled.
		 */
		setEnabled(item: GlideMenuItem): void;

		/**
		 * Hides the specified menu item.
		 * @item The item to be hidden.
		 */
		setHidden(item: GlideMenuItem): void;

		/**
		 * Sets an image for an item.
		 * @item the item to have the image displayed.
		 * @imgSrc the image to attach to the menu item.
		 */
		setImage(item: GlideMenuItem, imgSrc: String): void;

		/**
		 * Sets the display label for a menu item. The label may contain HTML.
		 * @item the item to be labeled.
		 * @label the label to be displayed. The string may contain HTML.
		 */
		setLabel(item: GlideMenuItem, label: String): void;

		/**
		 * Displays the specified item.
		 * @item The item to be displayed.
		 */
		setVisible(item: GlideMenuItem): void;

	}
	/**
	 * Displays a form in a GlideModal.
    * General usage of the GlideModalForm class involves creating the object, setting any preferences, and then rendering the GlideModalForm. Specify the query parameters that are passed to the form using setPreference(). Any name/value pair that you specify with setPreference() is sent along with the form POST request to display the form. The GlideFormModal is set to fill the height of the document window.
	 */
	declare class GlideModalFormV3 {
		/**
		 * Creates an instance of the GlideModalForm class.
		 * @title The form title.
		 * @tableName The table being shown.
		 * @onCompletionCallback The function to call after the form has been submitted and processed on the server. The callback function has the form callbackFunction(String action_verb, String sys_id, String table, String displayValue) where action_verb is the name of the UI action executed. Examples are sysverb_insert (Submit button), sysverb_cancel, sysverb_save (Save button). sys_id is the sys_id of the affected record. table is the name of the table containing the record. displayValue
		 */
		constructor(title: String, tableName: String, onCompletionCallback: Function);

		/**
		 * Sets the specified parameter to the specified value.
		 * @name The parameter name.
		 * @value The parameter value.
		 */
		addParm(name: String, value: String): void;

		/**
		 * Shows the form.
		 */
		render(): void;

		/**
		 * Sets the function to be called when the form has been successfully submitted and processed by the server.
		 * @callbackFunction The callback function to be called when the form has been successfully processed.
		 */
		setCompletionCallback(callbackFunction: Function): void;

		/**
		 * Sets the function to be called after the form has been loaded.
		 * @callbackFunction The function to be called after the form has been loaded. The callback function has the form callBackFunction(GlideModalForm obj)
		 */
		setOnloadCallback(callbackFunction: Function): void;

		/**
		 * Sets the object's sys_id preference.
		 * @sys_id The id preference. One of the query parameters passed to the form.
		 */
		setSysID(sys_id: String): void;

	}
	/**
	 * Provides methods for displaying a content overlay.
    * This is a fully-featured replacement for GlideWindow and GlideDialogWindow. Figure 1. Example overlay
	 */
	declare class GlideModalV3 {
		/**
		 * Creates an instance of the GlideModalV3 class.
		 * @id The UI page to load into the modal.
		 * @readOnly When true, hides the close button.
		 * @width The width in pixels.
		 */
		constructor(id: String, readOnly: Boolean, width: Number);

		/**
		 * Get a GlideModal object by ID.
		 * @id The element id of the GlideModal object.
		 */
		get(id: String): GlideModal;

		/**
		 * Returns the value of the specified property.
		 * @name The property name
		 */
		getPreference(name: String): String;

		/**
		 * Renders the UI page in the modal.
		 */
		render(): void;

		/**
		 * Display a modal with the specified HTML content.
		 * @html The HTML content to be shown in the modal.
		 */
		renderWithContent(html: Object): void;

		/**
		 * Display a modal with the specified HTML content.
		 * @html The HTML content to be shown in the modal.
		 */
		renderWithContent(html: String): void;

		/**
		 * Set a property that is read by the loaded UI page.
		 * @name The property name
		 * @value The property value
		 */
		setPreference(name: String, value: String): void;

		/**
		 * Set the properties and reload the modal.
		 * @properties An array of name-value pairs to be set.
		 */
		setPreferenceAndReload(properties: Array<any>): void;

		/**
		 * Sets the title of the modal.
		 * @title The title to be displayed
		 */
		setTitle(title: String): void;

		/**
		 * Set the width in pixels.
		 * @width The number of pixels.
		 */
		setWidth(width: Number): void;

		/**
		 * Change the view and reload the modal.
		 * @newView The view to use.
		 */
		switchView(newView: String): void;

	}
	/**
	 * Provides methods to control and refresh the navigator and main frame.
    * The GlideNavigation methods are accessed using the g_navigation global object.
	 */
	declare class GlideNavigationV3 {
		/**
		 * Redirects to a new URL.
		 * @url The URL to be loaded. It can be any URL supported by the browser.
		 * @target The frame to use. If omitted, opens in the current frame.
		 */
		open(url: String, target: String): void;

		/**
		 * Opens a popup window.
		 * @url The URL to open.
		 * @name The window name
		 * @features A comma separated list of features for the popup window.
		 * @noStack True to append sysparm_stack=no to the url. This prevents weirdness when using the form back button.
		 */
		openPopup(url: String, name: String, features: String, noStack: Boolean): Window;

		/**
		 * Redirects to a record. The record will be displayed in the navigator.
		 * @tableName The name of the table containing the record to be displayed.
		 * @sys_id The sys_id of the record to be displayed.
		 */
		openRecord(tableName: String, sys_id: String): void;

		/**
		 * Refreshes the navigator display.
		 */
		refreshNavigator(): void;

		/**
		 * Reloads the current frame.
		 */
		reloadWindow(): void;

	}
	/**
	 * You can show messages over the page content.
    * The GlideNotification method is accessed using the g_notification global object. List V3 must be activated for the g_notification object to be available.
	 */
	declare class GlideNotificationV3 {
		/**
		 * Displays the specified string over the page content as the specified type of message.
		 * @type The type of message - error, warning, or info.
		 */
		show(type: String): void;

	}
	/**
	 * GlideRecord is used for database operations. Client-side GlideRecord enables the use of some GlideRecord functionality in client-side scripts, such as client scripts and UI policy scripts.
    * A GlideRecord contains both records and fields. Queries made with the client-side GlideRecord are executed on the server. Therefore, a request is made from the client browser to obtain the record data. Client-side GlideRecord is not supported in scoped applications. Instead, create a script include and use GlideAjax, or use the REST APIs.
	 */
	declare class GlideRecordV3 {
		/**
		 * Creates an instance of the GlideRecord class for the specified table.
		 * @tableName The table to be used.
		 */
		constructor(tableName: String);

		/**
		 * Adds a column to order by in the query.
		 * @column The column by which to order the result set.
		 */
		addOrderBy(column: String): void;

		/**
		 * Adds a filter to return records where the field meets the specified condition (field, operator, value).
		 * @fieldName Name of the field to be checked.
		 * @operator An operator for the query.
		 * @value The value to use.
		 */
		addQuery(fieldName: String, operator: Object, value: Object): void;

		/**
		 * Adds a filter to return records where the field is equal to the value (or is in a list of values).
		 * @fieldName Name of the field to be checked.
		 * @value The value or list of values on which to query.
		 */
		addQuery(fieldName: String, value: Object): void;

		/**
		 * Deletes the current record.
		 * @responseFunction The response function.
		 */
		deleteRecord(responseFunction: Function): Boolean;

		/**
		 * Get a record by sysID.
		 * @sysId The sysID of the record for which to search.
		 */
		get(sysId: String): Boolean;

		/**
		 * Retrieves all query conditions as an encoded query string.
		 */
		getEncodedQuery(): String;

		/**
		 * Gets the name of the table associated with the GlideRecord.
		 */
		getTableName(): String;

		/**
		 * Determines if there are any more records in the GlideRecord.
		 */
		hasNext(): Boolean;

		/**
		 * Inserts a new record using the field values that have been set for the current record.
		 * @responseFunction The response function.
		 */
		insert(responseFunction: Function): String;

		/**
		 * Moves to the next record in the GlideRecord.
		 */
		next(): Boolean;

		/**
		 * Specifies an orderBy column. May be called more than once to order by multiple columns.
		 * @column The column to add to sort the result set.
		 */
		orderBy(column: String): void;

		/**
		 * Performs a query. Takes zero or more parameters. Parameters may be in any order. Any function is considered to be a response function. Any pair of literals is considered a query pair (field : value).
		 * @responseFunction The function called when the query results are available. (optional)
		 * @name A field name. (optional)
		 * @value The field value to check for. (optional)
		 */
		query(responseFunction: Function, name: String, value: String): void;

	}
	/**
	 * Access UI scripts from within client-side code.
    * There is no constructor for this class. Access methods using the g_ui_scripts global object in any client-side code, such as client or validation scripts. If calling a UI script with UI Type set to Mobile / Service Portal, use the g_ui_scripts['nameOfScript']; syntax. If calling a UI script with the UI Type set to All or Desktop, use the getUIScript() method to load the script. However, this method is not supported in Internet Explorer 11 when called outside of the Angular application environment. If calling a UI script outside of an Angular context using IE11, you must call the script directly. Note: This class does not support UI scripts with the Global field set to true.
	 */
	declare class GlideUIScripts {
		/**
		 * Calls a UI script with the UI Type set to All or Desktop from a client script or other client-side code. Returns a promise.
		 * @scriptName API name of the UI script to run.
		 */
		getUIScript(scriptName: String): Promise;

	}
	/**
	 * Provides methods for manipulating a URI.
    * The GlideURLV3 API can be used in client-side scripts using ListV2 and ListV3 APIs.
	 */
	declare class GlideURLV3 {
		/**
		 * Creates an instance of the GlideURL class.
		 * @contextPath A relative path for the URL.
		 */
		constructor(contextPath: String);

		/**
		 * Adds a query string name-value pair to the URL.
		 * @name Name of the query string parameter.
		 * @value Query string value.
		 */
		addParam(name: String, value: String): String;

		/**
		 * Get the entire context path and query string parameters as a single URI.
		 * @additionalParams A name-value pair object that contains parameters that are added to this URL request only. These additional parameters are not saved to the GlideURL object.
		 */
		getURL(additionalParams: Object): String;

		/**
		 * Reloads the current page URL.
		 */
		refresh(): void;

	}
	/**
	 * Provides methods to get and format translated messages.
    * The i18N methods are accessed using the g_i18n global object.
	 */
	declare class i18NV3 {
		/**
		 * Formats a string containing named tokens with values from a map.
		 * @message The message to have the tokens added.
		 * @map The map of name/value pairs to replace in the message.
		 */
		format(message: String, map: Object): String;

		/**
		 * Retrieves a translated message.
		 * @msgKey The message to be retrieved.
		 * @callback The function to be called when the message has been retrieved. The callback function has one argument, a string that is the translated message.
		 */
		getMessage(msgKey: String, callback: Function): void;

		/**
		 * Retrieves a set of messages.
		 * @msgKeys An array of keys specifying the messages to be retrieved.
		 * @callback The function to be called when the messages have been retrieved. The callback function has one argument, an object containing key-value pairs, where key is the requested message key, and the value is the translated string.
		 */
		getMessages(msgKeys: Array<any>, callback: Function): void;

	}
	/**
	 * Mobile GlideForm (g_form) methods enable you to work with forms on the mobile platform.
    * Use these methods in any script that targets a mobile device.
	 */
	declare class MobileGlideForm {
		/**
		 * Adds a decorative icon next to a field.
		 * @fieldName The field name.
		 * @icon The font icon to show next to the field.
		 * @text The text title for the icon (used for screen readers).
		 */
		addDecoration(fieldName: String, icon: String, text: String): void;

		/**
		 * Gets the form label text.
		 * @fieldName The field name.
		 */
		getLabel(fieldName: String): String;

		/**
		 * Determines if a field is present on the form.
		 * @fieldName The field to look for.
		 */
		hasField(fieldName: String): Boolean;

		/**
		 * Removes a decorative icon from next to a field.
		 * @fieldName The field name.
		 * @icon The icon to remove.
		 * @text The text title for the icon.
		 */
		removeDecoration(fieldName: String, icon: String, text: String): void;

		/**
		 * Sets the form label text.
		 * @fieldName The field name.
		 * @label The field label text.
		 */
		setLabel(fieldName: String, label: String): void;

	}
	/**
	 * The NotifyClient API allows you use Notify telephony functionality, such as making and receiving calls, from a web browser.
    * Several NotifyClient methods take a callback function as a parameter. Because NotifyClient calls are made asynchronously, these methods cannot return a value directly. Use the callback function to parse the returned data, such as by assigning variables or making other API calls.
	 */
	declare class NotifyClient {
		/**
		 * Instantiates a new Notify WebRTC Client object.
		 * @initializeVendorClientLazily Flag that indicates whether to use the autoSelectVendorCallback function passed in the setCallerId() method to automatically set the caller's associated vendor ( notifyConfig.vendor does not need to be defined in the constructor). false: Default. Do not use the autoSelectVendorCallback function to set the caller's vendor. The vendor must be set in the constructor. true: Use the autoSelectVendorCallback function to define the vendor when the caller ID is set.
		 * @notifyConfig JSON object that contains the configuration settings for the Notify WebRTC Client.
		 * @notifyConfigautoLoadScriptResources Flag that indicates how to load the core JS library needed by the vendor client. false: Default. Use vendor specific codes to load the required vendor JS library (enables backwards compatibility). true: Use notifyClient.js to load the core JS library.
		 * @notifyConfigcallerId Registered Notify number to use. Do not directly set this value. Use the method notifyClient.setCallerID() to set this value.
		 * @notifyConfigforceRefreshToken Flag that indicates whether to auto-renew expired client tokens. false: Do not automatically renew client tokens when they expire. true: Default. Automatically renew client tokens when they expire.
		 * @notifyConfigskipParentId Flag that indicates whether to immediately invoke the onIncoming caller for incoming calls. false: Default. Do not immediately invoke the onIncoming event handler. true: Immediately invoke the onIncoming event handler. By setting this flag, if there is another call, where the Twiml caused the incoming call, then setting this flag causes the system to auto poll the backend. This auto poll obtains the parent notify_call reference.
		 * @notifyConfigvendor Vendor to which the caller belongs. SNC.Notify.Vendor.TWILIO_DIRECT SNC.Notify.Vendor.TWILIO (older, deprecated Twilio driver)
		 */
		constructor(initializeVendorClientLazily: Boolean, notifyConfig: Object, notifyConfigautoLoadScriptResources: Boolean, notifyConfigcallerId: Number, notifyConfigforceRefreshToken: Boolean, notifyConfigskipParentId: Boolean, notifyConfigvendor: Constant);

		/**
		 * Registers an event handler to listen for changes in a Notify client.
		 * @event Name of the event to listen for. Instead of passing strings, use the constants defined in SNC.Notify.STD_EVENTS. CALL_START: call has started and is in progress. CALL_CANCEL: caller canceled the call. CALL_INIT: WebRTC connected to a call (incoming or outgoing). CALL_DISCONNECT: current call has been disconnected. ERROR: Error occurred. Parameters: message(string), errCode(string) message : error message to display. errCode : Optional. Associated error code. INCOMING_CALL: Call is coming in. Parameters: from(string), to(string), callId(string), parentId(string), sysId(string), isFromClient(boolean) from : caller's phone number. to : called phone number. callId : SID of the call. parentId : parent notify_call reference. If skipParentId is set to true, this parameter should not be passed. sysId : WebRTC-to-WebRTC calls only. Unique identifier (sys_id) of the caller. isFromClient : WebRTC-to-WebRTC calls only. Flag that indicates whether the call is from another WebRTC client. CALL_MUTE: client is muted. CALL_UNMUTE: client is unmuted. OFFLINE: WebRTC session is not active. ONLINE: WebRTC session is ready. Must be set after calling the init() method.
		 */
		addEventListener(event: String): Function;

		/**
		 * Calls the specified phone number or the phone number associated with a specified user.
		 * @identifier JSON object that contains either a phone number to call or the sys_id of a WebRTC user. Passing a user sys_id causes the call to be made through browser-to-browser communication. You can obtain the user sys_id from the Notify WebRTC Session table. Note: If you provide both a phone number and user sys_id, the method only uses the phone number.
		 */
		call(identifier: Object): void;

		/**
		 * Kills the current Notify client, rendering it unusable.
		 */
		destroy(): void;

		/**
		 * Forwards an ongoing incoming or outgoing phone call to either a different phone number or a different WebRTC client.
		 * @argument JSON object that contains the necessary information for forwarding the call to either a phone number or a WebRTC client (user sys_id). You can obtain this sys_id from the Notify WebRTC Session table.
		 */
		forwardCall(argument: Object): void;

		/**
		 * Returns a list of clients available to accept calls.
		 * @callback Function to use to parse the list of clients. This function accepts a single parameter, an array of JSON objects with the following format: [{ sys_id: "...", // user's sys_id name: "..." // user's name }]
		 */
		getAvailableClients(callback: Function): void;

		/**
		 * Returns the parent call identifier for a specified call identifier, if one exists.
		 * @callId Unique identifier of the call for which to return the parent call identifier.
		 * @callback Function that obtains the JSON object that contains either the parent call identifier or an error message if the identifier could not be obtained after several tries.
		 */
		getParentId(callId: String, callback: Function): String;

		/**
		 * Returns the normalized status of the current call.
		 */
		getStatus(): String;

		/**
		 * End the current call.
		 */
		hangupCall(): void;

		/**
		 * Initializes the client driver.
		 */
		init(): void;

		/**
		 * Mute or unmute the current client.
		 * @muted Mutes or unmutes the current call. false: (or any non-true value) unmutes the current call. true: mutes the current call.
		 */
		mute(muted: Boolean): void;

		/**
		 * Answers and connects to an incoming call from a WebRTC client.
		 */
		pickupCall(): void;

		/**
		 * Send one or more DTMF-valid digits over the current call.
		 * @digits One or more DTMF-valid digits.
		 */
		sendDtmf(digits: String): void;

		/**
		 * Sets the caller ID for the current client session.
		 * @value Phone number to use to make and receive calls.
		 * @autoSelectVendorCallback Optional. initializeVendorClientLazily must be set to "true" in the constructor to use this function, otherwise an error is thrown. Name of the callback function to call once the vendor is automatically set for the specified phone number. With this option, the vendor does not need to be specified in the constructor ( notifyConfig.vendor). Auto vendor selection is an asynchronous operation. Therefore, this callback is required to indicate when it is safe to call notifyConfig.init(), as this method requires that the vendor be set before it is called. In addition, you must also check if notifyConfig.vendor has been set in the callback to ensure that a vendor has been specified.
		 */
		setCallerId(value: String, autoSelectVendorCallback: Function): void;

		/**
		 * Sets the availability of an active WebRTC client agent.
		 * @available Flag that indicates whether an active WebRTC client wants to receive calls. false: client does not want to receive calls. true: client does want to receive calls.
		 */
		setClientAvailable(available: boolean): void;

	}
	/**
	 * Provides the ability to load scripts asynchronously.
    * You can use the ScriptLoader API in client-side scripts for a platform/desktop UI using ListV2 and ListV3 APIs. It is not available for Service Portal, Mobile, or Agent Workspace. You access the ScriptLoader methods by using the global object ScriptLoader.
	 */
	declare class ScriptLoader {
		/**
		 * Loads scripts asynchronously.
		 * @scripts An array of scripts.
		 * @callback The function called when the scripts have been loaded. The callback function has no arguments.
		 */
		getScripts(scripts: Array<any>, callback: Function): void;

		/**
		 * Gets scripts asynchronously.
		 * @filePath A path, including the file name, that contains one or more scripts.
		 * @callback The function to be called after the scripts have been loaded. The callback function has no arguments.
		 */
		getScripts(filePath: String, callback: Function): void;

	}
	/**
	 * You can show messages on a screen reader. The spAriaUtil service is an angular service included as part of the Service Portal angular application. The spAriaUtil service is available in the client script block of Service Portal widgets.
    * 
	 */
	declare class spAriaUtil {
		/**
		 * Announce a message to a screen reader.
		 * @message The message to be shown.
		 */
		sendLiveMessage(message: String): void;

	}
	/**
	 * The spModal class provides an alternative way to show alerts, prompts, and confirmation dialogs. The SPModal class is available in Service Portal client scripts.
    * You can use spModal.open() to display a widget in a modal dialog. The spModal class is a lightweight wrapper for Angular UI bootstrap's $uibModal.
	 */
	declare class spModal {
		/**
		 * Displays an alert.
		 * @message The message to display.
		 */
		alert(message: String): Boolean;

		/**
		 * Displays a confirmation message.
		 * @message The message to display.
		 */
		confirm(message: String): Boolean;

		/**
		 * Opens a modal window using the specified options.
		 * @options An object that may have these properties. title - a string that can be HTML that goes in the header. The default is empty. message - a string that can be HTML that goes in the header. The default is empty. buttons - an array that contains the buttons to show on the dialog. The default is Cancel and OK. input - a Boolean. When true shows an input field on the dialog. The default is false. value - a string containing the value of the input field. The default is empty. widget - a string that identifies the widget ID or sys_id to embed in the dialog. The default is empty. widgetInput - an object to send the embedded widget as input. The default is null. shared - a client-side object to share data with the embedded widget client script. size - a string indicating the size of the window. Can be 'sm' or 'lg'. The default is empty.
		 */
		open(options: Object): void;

		/**
		 * Displays a prompt for user input.
		 * @message The message to display.
		 * @defaultoptional A default value to use if the user does not provide a response.
		 */
		prompt(message: String, defaultoptional: String): String;

	}
	/**
	 * Utility methods to perform common functions in a Service Portal widget client script.
    * 
	 */
	declare class spUtil {
		/**
		 * Displays a notification error message.
		 * @message Error message to display.
		 */
		addErrorMessage(message: String): void;

		/**
		 * Displays a notification info message.
		 * @message Message to display.
		 */
		addInfoMessage(message: String): void;

		/**
		 * Displays a trivial notification message.
		 * @message Message to display.
		 */
		addTrivialMessage(message: String): void;

		/**
		 * Formats a string as an alternative to string concatenation.
		 * @template String template with values for substitution.
		 * @data Object containing variables for substitution.
		 */
		format(template: String, data: Object): String;

		/**
		 * Returns a widget model by ID or sys_id.
		 * @widgetId Widget ID or sys_id of the widget to embed.
		 * @data (Optional) Name/value pairs of parameters to pass to the widget model.
		 */
		get(widgetId: String, data: Object): Object;

		/**
		 * Watches for updates to a table or filter and returns the value from the callback function.
		 * @scope Scope of the data object updated by the callback function.
		 * @table Watched table.
		 * @filter Filter for fields to watch.
		 * @callback Optional. Parameter to define the callback function.
		 */
		recordWatch(scope: Object, table: String, filter: String, callback: Function): Promise;

		/**
		 * Calls the server and replaces the current options and data with the server response.
		 * @scope The scope defined for the update.
		 */
		refresh(scope: Object): Object;

		/**
		 * Updates the data object on the server within a given scope.
		 * @scope The scope defined for the update.
		 */
		update(scope: Object): Object;

	}
	/**
	 * Use a StopWatch object to measure the duration of operations.
    * The StopWatch API can be used in client-side scripts using ListV2 and ListV3 APIs.
	 */
	declare class StopWatch {
		/**
		 * Creates an instance of the StopWatch class.
		 */
		constructor();

		/**
		 * Creates an instance of the StopWatch class using the specified date as the initial value.
		 * @initialDate The initial date for the object.
		 */
		constructor(initialDate: Date);

		/**
		 * Returns the number of milliseconds since the timer started.
		 */
		getTime(): Number;

		/**
		 * Resets the timer to the current time.
		 */
		restart(): void;

		/**
		 * The elapsed time as HH:MM:SS.SSS.
		 */
		toString(): String;

	}

const g_form: GlideForm;
const g_list: GlideList2;
const g_menu: GlideMenu;
const g_item: GlideMenu;
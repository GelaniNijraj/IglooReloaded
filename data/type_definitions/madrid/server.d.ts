	/**
	 * APIs available for encrypting certificates in scoped applications.
    * Use these methods to generate a hash for the certificate, sign data using a private key, and generate a message authentication code.
	 */
	declare class CertificateEncryption {
		/**
		 * Instantiates a CertificateEncryption object in a scoped application.
		 */
		constructor();

		/**
		 * Generates the Message Authentication Code (MAC), which is used to authenticate a message.
		 * @key Key to use to sign the message. Must be Base64 encoded.
		 * @algorithm Algorithm to use to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so on.
		 * @data Data to process.
		 */
		generateMac(key: String, algorithm: String, data: String): String;

		/**
		 * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store Cert.
		 * @certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate] table.
		 * @algorithm SHA-1, SHA-256, and so on
		 */
		getThumbPrint(certificateID: String, algorithm: String): String;

		/**
		 * Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore entry.
		 * @certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate] table.
		 * @alias Alias name for the certificate.
		 * @algorithm SHA-1, SHA-256, and so on.
		 */
		getThumbPrintFromKeystore(certificateID: String, alias: String, algorithm: String): String;

		/**
		 * Signs the data using the private key and the given algorithm.
		 * @certificateID sys_id of the certificate record in the X.509 Certificate [sys_certificate] table.
		 * @alias Private key name.
		 * @aliaspassword Password for the private key.
		 * @datatosign Data to sign.
		 * @algorithm SHA-1, SHA-256, and so on.
		 */
		sign(certificateID: String, alias: String, aliaspassword: String, datatosign: String, algorithm: String): String;

	}
	/**
	 * GlideAggregate enables you to easily create database aggregation queries.
    * The scoped GlideAggregate class is an extension of GlideRecord and provides database aggregation (COUNT, SUM, MIN, MAX, AVG) queries. This functionality can be helpful when creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields. When you use GlideAggregate on currency or price fields, you are working with the reference currency value. Be sure to convert the aggregate values to the user's session currency for display. Because the conversion rate between the currency or price value (displayed value) and its reference currency value (aggregation value) might change, the result may not be what the user expects. Note: When using an on-premise system, the database server time zone must be set to GMT/UTC for this class to work properly.
	 */
	declare class GlideAggregate {
		/**
		 * Creates a GlideAggregate object on the specified table.
		 * @tableName Name of the table.
		 */
		constructor(tableName: String);

		/**
		 * Adds an aggregate.
		 * @agg Name of the aggregate to add, for example, COUNT, MIN, or MAX
		 * @name (Optional) Name of the column to aggregate. Null is the default.
		 */
		addAggregate(agg: String, name: String): void;

		/**
		 * Adds an encoded query to the other queries that may have been set for this aggregate.
		 * @query An encoded query to add to the aggregate.
		 */
		addEncodedQuery(query: String): void;

		/**
		 * Adds a not null query to the aggregate.
		 * @fieldname The name of the field.
		 */
		addNotNullQuery(fieldname: String): GlideQueryCondition;

		/**
		 * Adds a null query to the aggregate.
		 * @fieldName The name of the field.
		 */
		addNullQuery(fieldName: String): GlideQueryCondition;

		/**
		 * Adds a query to the aggregate.
		 * @name The query to add.
		 * @operator The operator for the query.
		 * @value The list of values to include in the query.
		 */
		addQuery(name: String, operator: String, value: String): GlideQueryCondition;

		/**
		 * Adds a trend for a field.
		 * @fieldName The name of the field for which trending should occur.
		 * @timeInterval The time interval for the trend. The following choices are available: Year, Quarter, Date, Week, DayOfWeek, Hour, Value.
		 */
		addTrend(fieldName: String, timeInterval: String): void;

		/**
		 * Gets the value of an aggregate from the current record.
		 * @agg The type of the aggregate, for example, SUM or Count.
		 * @name Name of the field to get the aggregate from.
		 */
		getAggregate(agg: String, name: String): String;

		/**
		 * Gets the query necessary to return the current aggregate.
		 */
		getAggregateEncodedQuery(): String;

		/**
		 * Retrieves the encoded query.
		 */
		getEncodedQuery(): String;

		/**
		 * Retrieves the number of rows in the GlideAggregate object.
		 */
		getRowCount(): Number;

		/**
		 * Retrieves the table name associated with this GlideAggregate object.
		 */
		getTableName(): String;

		/**
		 * Gets the value of a field.
		 * @name The name of the field.
		 */
		getValue(name: String): String;

		/**
		 * Provides the name of a field to use in grouping the aggregates.
		 * @name Name of the field.
		 */
		groupBy(name: String): void;

		/**
		 * Determines if there are any more records in the GlideAggregate object.
		 */
		hasNext(): Boolean;

		/**
		 * Moves to the next record in the GlideAggregate.
		 */
		next(): Boolean;

		/**
		 * Orders the aggregates using the value of the specified field. The field will also be added to the group-by list.
		 * @name Name of the field to order the aggregates by.
		 */
		orderBy(name: String): void;

		/**
		 * Orders the aggregates based on the specified aggregate and field.
		 * @agg Type of aggregation.
		 * @fieldName Name of the field to aggregate.
		 */
		orderByAggregate(agg: String, fieldName: String): void;

		/**
		 * Sorts the aggregates in descending order based on the specified field. The field will also be added to the group-by list.
		 * @name Name of the field.
		 */
		orderByDesc(name: String): void;

		/**
		 * Issues the query and gets the results.
		 */
		query(): void;

		/**
		 * Sets whether the results are to be grouped.
		 * @b When true the results are grouped.
		 */
		setGroup(b: Boolean): void;

	}
	/**
	 * The scoped GlideDate class provides methods for performing operations on GlideDate objects, such as instantiating GlideDate objects or working with GlideDate fields.
    * 
	 */
	declare class GlideDate {
		/**
		 * Creates a GlideDate object with the current date time.
		 */
		constructor();

		/**
		 * Gets the date in the specified date format.
		 * @format the desired date format
		 */
		getByFormat(format: String): String;

		/**
		 * Gets the day of the month stored by the GlideDate object, expressed in the UTC time zone.
		 */
		getDayOfMonthNoTZ(): Number;

		/**
		 * Gets the date in the current user's display format and time zone.
		 */
		getDisplayValue(): String;

		/**
		 * Gets the display value in the internal format (yyyy-MM-dd).
		 */
		getDisplayValueInternal(): String;

		/**
		 * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
		 */
		getMonthNoTZ(): Number;

		/**
		 * Gets the date value stored in the database by the GlideDate object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default.
		 */
		getValue(): String;

		/**
		 * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
		 */
		getYearNoTZ(): Number;

		/**
		 * Sets a date value using the current user's display format and time zone.
		 * @asDisplayed The date in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as yyyy-MM-dd.
		 */
		setDisplayValue(asDisplayed: String): void;

		/**
		 * Sets the date of the GlideDate object.
		 * @o The date and time to use.
		 */
		setValue(o: String): void;

		/**
		 * Gets the duration difference between two GlideDate values.
		 * @start The start value.
		 * @end The end value.
		 */
		subtract(start: GlideDate, end: GlideDate): GlideDuration;

	}
	/**
	 * The scoped GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields.
    * Use the GlideDateTime methods to perform date-time operations, such as instantiating a GlideDateTime object, performing date-time calculations, formatting a date-time, or converting between date-time formats.
	 */
	declare class GlideDateTime {
		/**
		 * Adds a GlideTime object to the current GlideDateTime object.
		 * @gd The GlideTime object to add.
		 */
		add(gd: GlideTime): void;

		/**
		 * Adds the specified number of milliseconds to the current GlideDateTime object.
		 * @milliseconds The number of milliseconds to add.
		 */
		add(milliseconds: Number): void;

		/**
		 * Instantiates a new GlideDateTime object with the current date and time in Greenwich Mean Time (GMT).
		 */
		constructor();

		/**
		 * Instantiates a new GlideDateTime object set to the time of the GlideDateTime object passed in the parameter.
		 * @g The GlideDateTime object to use for setting the time of the new object.
		 */
		constructor(g: GlideDateTime);

		/**
		 * Instantiates a new GlideDateTime object from a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.
		 * @value A UTC date and time using the internal format yyyy-MM-dd HH:mm:ss.
		 */
		constructor(value: String);

		/**
		 * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the local date and time values.
		 * @days The number of days to add. Use a negative value to subtract.
		 */
		addDaysLocalTime(days: Number): void;

		/**
		 * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time values.
		 * @days The number of days to add. Use a negative number to subtract.
		 */
		addDaysUTC(days: Number): void;

		/**
		 * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the local date and time values.
		 * @months The number of months to add. use a negative value to subtract.
		 */
		addMonthsLocalTime(months: Number): void;

		/**
		 * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time values.
		 * @months The number of months to add. Use a negative value to subtract.
		 */
		addMonthsUTC(months: Number): void;

		/**
		 * Adds the specified number of seconds to the current GlideDateTime object.
		 * @seconds The number of seconds to add.
		 */
		addSeconds(seconds: Number): void;

		/**
		 * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts weeks using the local date and time values.
		 * @weeks The number of weeks to add. Use a negative value to subtract.
		 */
		addWeeksLocalTime(weeks: Number): void;

		/**
		 * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts weeks using the UTC date and time values.
		 * @weeks The number of weeks to add. Use a negative value to subtract.
		 */
		addWeeksUTC(weeks: Number): void;

		/**
		 * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts years using the local date and time values.
		 * @years The number of years to add. Use a negative value to subtract.
		 */
		addYearsLocalTime(years: Number): void;

		/**
		 * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted as being in the UTC time zone.
		 * @years The number of years to add. Use a negative value to subtract.
		 */
		addYearsUTC(years: Number): void;

		/**
		 * Determines if the GlideDateTime object occurs after the specified GlideDateTime.
		 * @gdt The time to check against.
		 */
		after(gdt: GlideDateTime): Boolean;

		/**
		 * Determines if the GlideDateTime object occurs before the specified GlideDateTime.
		 * @gdt The time to check against.
		 */
		before(gdt: GlideDateTime): Boolean;

		/**
		 * Compares two date and time objects to determine whether they are equivalent or one occurs before or after the other.
		 * @o Date and time object in GlideDateTime format
		 */
		compareTo(o: Object): Number;

		/**
		 * Compares a datetime with an existing value for equality.
		 * @dateTime The datetime to compare.
		 */
		equals(dateTime: GlideDateTimeobjectorString): Boolean;

		/**
		 * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.
		 */
		getDate(): GlideDate;

		/**
		 * Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone.
		 */
		getDayOfMonthLocalTime(): Number;

		/**
		 * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone.
		 */
		getDayOfMonthUTC(): Number;

		/**
		 * Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone.
		 */
		getDayOfWeekLocalTime(): Number;

		/**
		 * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone.
		 */
		getDayOfWeekUTC(): Number;

		/**
		 * Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone.
		 */
		getDaysInMonthLocalTime(): Number;

		/**
		 * Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.
		 */
		getDaysInMonthUTC(): Number;

		/**
		 * Gets the date and time value in the current user's display format and time zone.
		 */
		getDisplayValue(): String;

		/**
		 * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
		 */
		getDisplayValueInternal(): String;

		/**
		 * Gets the amount of time that daylight saving time is offset.
		 */
		getDSTOffset(): Number;

		/**
		 * Gets the current error message.
		 */
		getErrorMsg(): String;

		/**
		 * Returns the object's time in the local time zone and in the internal format.
		 */
		getInternalFormattedLocalTime(): String;

		/**
		 * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.
		 */
		getLocalDate(): GlideDate;

		/**
		 * Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user's time zone.
		 */
		getLocalTime(): GlideTime;

		/**
		 * Gets the month stored by the GlideDateTime object, expressed in the current user's time zone.
		 */
		getMonthLocalTime(): Number;

		/**
		 * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
		 */
		getMonthUTC(): Number;

		/**
		 * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
		 */
		getNumericValue(): Number;

		/**
		 * Returns a GlideTime object that represents the time portion of the GlideDateTime object.
		 */
		getTime(): GlideTime;

		/**
		 * Gets the time zone offset in milliseconds.
		 */
		getTZOffset(): Number;

		/**
		 * Returns the object's time in the local time zone and in the user's format.
		 */
		getUserFormattedLocalTime(): String;

		/**
		 * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
		 */
		getValue(): String;

		/**
		 * Gets the number of the week stored by the GlideDateTime object, expressed in the current user's time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
		 */
		getWeekOfYearLocalTime(): Number;

		/**
		 * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
		 */
		getWeekOfYearUTC(): Number;

		/**
		 * Gets the year stored by the GlideDateTime object, expressed in the current user's time zone.
		 */
		getYearLocalTime(): Number;

		/**
		 * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
		 */
		getYearUTC(): Number;

		/**
		 * Determines if an object's date is set.
		 */
		hasDate(): Boolean;

		/**
		 * Determines if an object's time uses a daylight saving offset.
		 */
		isDST(): Boolean;

		/**
		 * Determines if a value is a valid date and time.
		 */
		isValid(): Boolean;

		/**
		 * Determines if the GlideDateTime object occurs on or after the specified GlideDateTime.
		 * @gdt The time to check against.
		 */
		onOrAfter(gdt: GlideDateTime): Boolean;

		/**
		 * Determines if the GlideDateTime object occurs on or before the specified GlideDateTime.
		 * @gdt The time to check against.
		 */
		onOrBefore(gdt: GlideDateTime): Boolean;

		/**
		 * Sets the day of the month to a specified value in the current user's time zone.
		 * @day The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
		 */
		setDayOfMonthLocalTime(day: Number): void;

		/**
		 * Sets the day of the month to a specified value in the UTC time zone.
		 * @day The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
		 */
		setDayOfMonthUTC(day: Number): void;

		/**
		 * Sets a date and time value using the current user's display format and time zone.
		 * @asDisplayed The date and time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a workflow script, use variable .setDisplayValue(gs.nowDateTime);.
		 */
		setDisplayValue(asDisplayed: String): void;

		/**
		 * Sets a date and time value using the current user's time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the value parameter does not match the format parameter. You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
		 * @value The date and time in the current user's time zone.
		 * @format The date and time format to use to parse the value parameter.
		 */
		setDisplayValue(value: String, format: String): void;

		/**
		 * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
		 * @value The date and time in internal format.
		 */
		setDisplayValueInternal(value: String): void;

		/**
		 * Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter.
		 * @g The object to use for setting the datetime value.
		 */
		setGlideDateTime(g: GlideDateTime): void;

		/**
		 * Sets the month stored by the GlideDateTime object to the specified value using the current user's time zone.
		 * @month The month to change to.
		 */
		setMonthLocalTime(month: Number): void;

		/**
		 * Sets the month stored by the GlideDateTime object to the specified value using the UTC time zone.
		 * @month The month to change to.
		 */
		setMonthUTC(month: Number): void;

		/**
		 * Sets the date and time of the GlideDateTime object.
		 * @o The date and time to use. This parameter may be one of several types: A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss. Sets the value of the object to the specified date and time. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(String value) constructor. If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats. Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values. When using a non-standard date and time format, use etValueUTC(String dt, String format) instead. A GlideDateTime object. Sets the value of the object to the date and time stored by the GlideDateTime passed in the parameter. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(GlideDateTime g) constructor. A JavaScript Number. Sets the value of the object using the Number value as milliseconds past January 1, 1970 00:00:00 GMT.
		 */
		setValue(o: String): void;

		/**
		 * Sets a date and time value using the UTC time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the dt parameter does not match the format parameter. You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
		 * @dt The date and time to use.
		 * @format The date and time format to use.
		 */
		setValueUTC(dt: String, format: String): void;

		/**
		 * Sets the year stored by the GlideDateTime object to the specified value using the current user's time zone.
		 * @year The year to change to.
		 */
		setYearLocalTime(year: Number): void;

		/**
		 * Sets the year stored by the GlideDateTime object to the specified value using the UTC time zone.
		 * @year The year to change to.
		 */
		setYearUTC(year: Number): void;

		/**
		 * Gets the duration difference between two GlideDateTime values.
		 * @Start The start value.
		 * @End The end value.
		 */
		subtract(Start: GlideDateTime, End: GlideDateTime): GlideDuration;

		/**
		 * Subtracts a specified amount of time from the current GlideDateTime object.
		 * @time The time value to subtract.
		 */
		subtract(time: GlideTime): void;

		/**
		 * Subtracts the specified number of milliseconds from the GlideDateTime object.
		 * @milliseconds The number of milliseconds to subtract.
		 */
		subtract(milliseconds: Number): void;

		/**
		 * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to getValue().
		 */
		toString(): String;

	}
	/**
	 * Build functions to perform SQL operations in the database.
    * The GlideDBFunctionBuilder methods provide a way to build Relational Database Management System (RDBMS) functions to perform SQL operations on record data. These methods can be used in both scoped and global server scripts. To use platform functions: Construct a function using the GlideDBFunctionBuilder constructor and associated methods. After building a function, you can apply the function to the current record using the addFunction() method of the GlideRecord class. Add the function to a query using the addQuery() method of the GlideRecord class. Retrieve the results of the function using the existing GlideRecord API methods such as getValue() and getElement().
	 */
	declare class GlideDBFunctionBuilder {
		/**
		 * Adds the values of two or more integer fields.
		 */
		add(): void;

		/**
		 * Instantiates a GlideDBFunctionBuilder object.
		 */
		constructor();

		/**
		 * Builds the database function defined by the GlideDBFunctionBuilder object.
		 */
		build(): void;

		/**
		 * Concatenates the values of two or more fields.
		 */
		concat(): void;

		/**
		 * Defines a constant value to use in the function. If used with the dayofweek() method, the string defines whether to use Sunday or Monday as the first day of the week.
		 * @constant A constant value used in a function. When used with the dayofweek() method, the value defines whether the week starts on a Sunday or Monday. 1 : Week begins on Sunday. 2 : Week begins on Monday. This definition enables the dayofweek() method to return the correct day of the week from a given date. If a value other than 1 or 2 is provided, the dayofweek() method uses Sunday as the first day of the week.
		 */
		constant(constant: String): void;

		/**
		 * Determines the duration using a given start date/time and end date/time.
		 */
		datediff(): void;

		/**
		 * Returns an integer representing the day of the week for a given date.
		 */
		dayofweek(): Integer;

		/**
		 * Divides the value of one integer field by another.
		 */
		divide(): void;

		/**
		 * Defines a field on which a SQL operation is performed.
		 * @field The field on which you are performing the SQL operation.
		 */
		field(field: String): void;

		/**
		 * Determines the number of code units in a field.
		 */
		length(): void;

		/**
		 * Multiplies the values of two integer fields.
		 */
		multiply(): void;

		/**
		 * Subtracts the value of one integer field from another.
		 */
		subtract(): void;

	}
	/**
	 * The scoped GlideDigest class provides methods for creating a message digest from strings or input streams using MD5, SHA1, or SHA256 hash algorithms.
    * 
	 */
	declare class GlideDigest {
		/**
		 * Creates an instance of scoped GlideDigest.
		 */
		constructor();

		/**
		 * Create a message digest from a string using the MD5 algorithm. The output string is in Base64.
		 * @source The source string.
		 */
		getMD5Base64(source: String): String;

		/**
		 * Create a message digest from an input stream using the MD5 algorithm. The output string is in Base64.
		 * @inputStream The source input stream.
		 */
		getMD5Base64FromInputStream(inputStream: GlideScriptableInputStream): String;

		/**
		 * Create a message digest from a string using the MD5 algorithm. The output string is in hexadecimal.
		 * @source The source string.
		 */
		getMD5Hex(source: String): String;

		/**
		 * Create a message digest from an input stream using the MD5 algorithm. The output string is in hexadecimal.
		 * @inputStream The source input stream.
		 */
		getMD5HexFromInputStream(inputStream: GlideScriptableInputStream): String;

		/**
		 * Create a message digest from a string using the SHA1 algorithm. The output string is in Base64.
		 * @source The source string.
		 */
		getSHA1Base64(source: String): String;

		/**
		 * Create a message digest from an input stream using the SHA1 algorithm. The output string is in Base64.
		 * @inputStream The source input stream.
		 */
		getSHA1Base64FromInputStream(inputStream: GlideScriptableInputStream): String;

		/**
		 * Create a message digest from a string using the SHA1 algorithm. The output string is in hexadecimal.
		 * @source The source string.
		 */
		getSHA1Hex(source: String): String;

		/**
		 * Create a message digest from an input stream using the SHA1 algorithm. The output string is in hexadecimal.
		 * @inputStream The source input stream.
		 */
		getSHA1HexFromInputStream(inputStream: GlideScriptableInputStream): String;

		/**
		 * Create a message digest from a string using the SHA256 algorithm. The output string is in Base64.
		 * @source The source string.
		 */
		getSHA256Base64(source: String): String;

		/**
		 * Create a message digest from an input stream using the SHA256 algorithm. The output string is in Base64.
		 * @inputStream The source input stream.
		 */
		getSHA256Base64FromInputStream(inputStream: GlideScriptableInputStream): String;

		/**
		 * Create a message digest from a string using the SHA256 algorithm. The output string is in hexadecimal.
		 * @source The source string.
		 */
		getSHA256Hex(source: String): String;

		/**
		 * Create a message digest from an input stream using the SHA256 algorithm. The output string is in hexadecimal.
		 * @inputStream The source input stream.
		 */
		getSHA256HexFromInputStream(inputStream: GlideScriptableInputStream): String;

	}
	/**
	 * The scoped GlideDuration class provides methods for working with spans of time or durations.
    * GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00. As a result, setValue() and getValue() use the scoped GlideDateTime object for parameters and return values.
	 */
	declare class GlideDuration {
		/**
		 * Add the specified duration to the object.
		 * @duration The value to add to the object.
		 */
		add(duration: GlideDuration): GlideDuration;

		/**
		 * Instantiates a GlideDuration object.
		 */
		constructor();

		/**
		 * Instantiates a GlideDuration object by cloning the value of another GlideDuration object.
		 * @another Another scoped GlideDuration object.
		 */
		constructor(another: GlideDuration);

		/**
		 * Instantiates a GlideDuration object with the specified duration.
		 * @milliseconds The duration value in milliseconds.
		 */
		constructor(milliseconds: Number);

		/**
		 * Instantiates a GlideDuration object with the specified display value.
		 * @displayValue The display value.
		 */
		constructor(displayValue: String);

		/**
		 * Gets the duration in the specified format.
		 * @format The duration format.
		 */
		getByFormat(format: String): String;

		/**
		 * Gets the number of days.
		 */
		getDayPart(): Number;

		/**
		 * Gets the display value of the duration in number of days, hours, and minutes.
		 */
		getDisplayValue(): String;

		/**
		 * Gets the duration value in "d HH:mm:ss" format.
		 */
		getDurationValue(): String;

		/**
		 * Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down.
		 */
		getRoundedDayPart(): Number;

		/**
		 * Gets the internal value of the GlideDuration object.
		 */
		getValue(): String;

		/**
		 * Sets the display value.
		 * @asDisplayed The duration in "d HH:mm:ss" format.
		 */
		setDisplayValue(asDisplayed: String): void;

		/**
		 * Sets the internal value of the GlideDuration object.
		 * @o The duration in the object's internal format, which is the date and time from January 1, 1970, 00:00:00.
		 */
		setValue(o: Object): void;

		/**
		 * Subtracts the specified duration from the current duration.
		 * @duration The duration to subtract.
		 */
		subtract(duration: GlideDuration): void;

	}
	/**
	 * The Scoped GlideElement API provides a number of convenient script methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord.
    * 
	 */
	declare class GlideElement {
		/**
		 * Determines if the user's role permits the creation of new records in this field.
		 */
		canCreate(): Boolean;

		/**
		 * Indicates whether the user's role permits them to read the associated GlideRecord.
		 */
		canRead(): Boolean;

		/**
		 * Determines whether the user's role permits them to write to the associated GlideRecord.
		 */
		canWrite(): Boolean;

		/**
		 * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
		 */
		changes(): Boolean;

		/**
		 * Determines if the previous value of the current field matches the specified object.
		 * @o An object value to check against the previous value of the current field.
		 */
		changesFrom(o: Object): Boolean;

		/**
		 * Determines if the new value of a field, after a change, matches the specified object.
		 * @o An object value to check against the new value of the current field.
		 */
		changesTo(o: Object): Boolean;

		/**
		 * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
		 */
		dateNumericValue(): Number;

		/**
		 * Returns the value of the specified attribute from the dictionary.
		 * @attributeName Attribute name
		 */
		getAttribute(attributeName: String): String;

		/**
		 * Returns the Boolean value of the specified attribute from the dictionary.
		 * @attributeName Attribute name
		 */
		getBooleanAttribute(attributeName: String): Boolean;

		/**
		 * Generates a choice list for a field.
		 * @dependent Optional: a dependent value
		 */
		getChoices(dependent: String): Array;

		/**
		 * Returns the choice label for the current choice.
		 */
		getChoiceValue(): String;

		/**
		 * Returns the clear text value for Password (2 way encrypted) fields in scoped applications.
		 */
		getDecryptedValue(): String;

		/**
		 * Gets the formatted display value of the field.
		 * @maxCharacters Optional: Maximum characters desired
		 */
		getDisplayValue(maxCharacters: Number): String;

		/**
		 * Returns the field's element descriptor.
		 */
		getED(): ScopedGlideElementDescriptor;

		/**
		 * Returns the phone number in international format.
		 */
		getGlobalDisplayValue(): String;

		/**
		 * Returns the HTML value of a field.
		 * @maxChars Optional. Maximum number of characters to return.
		 */
		getHTMLValue(maxChars: Number): String;

		/**
		 * Returns either the most recent journal entry or all journal entries.
		 * @mostRecent If 1, returns the most recent entry. If -1, returns all journal entries.
		 */
		getJournalEntry(mostRecent: Number): String;

		/**
		 * Returns the object label.
		 */
		getLabel(): String;

		/**
		 * Returns the name of the field.
		 */
		getName(): String;

		/**
		 * Gets the table name for a reference element.
		 */
		getReferenceTable(): String;

		/**
		 * Returns a GlideRecord object for a given reference element.
		 */
		getRefRecord(): GlideRecord;

		/**
		 * Returns the name of the table on which the field resides.
		 */
		getTableName(): String;

		/**
		 * Determines if a field is null.
		 */
		nil(): Boolean;

		/**
		 * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
		 * @milliseconds Number of milliseconds since 1/1/1970
		 */
		setDateNumericValue(milliseconds: Number): void;

		/**
		 * Sets the display value of the field.
		 * @value The value to set for the field.
		 */
		setDisplayValue(value: Object): void;

		/**
		 * Adds an error message. Available in Fuji patch 3.
		 * @errorMessage The error message.
		 */
		setError(errorMessage: String): void;

		/**
		 * Sets the field to the specified phone number.
		 * @phoneNumber The phone number to set. This can be in either the international or local format.
		 * @strict When true, specifies that the number specified must match the correct format. When false, the system attempts to correct an improperly formatted phone number.
		 */
		setPhoneNumber(phoneNumber: Object, strict: Boolean): Boolean;

		/**
		 * Sets the value of a field.
		 * @value Object value to set the field to.
		 */
		setValue(value: Object): void;

		/**
		 * Converts the value to a string.
		 * @value Object value to set the field to.
		 */
		toString(value: Object): String;

	}
	/**
	 * The scoped GlideElementDescriptor API provides information about individual fields.
    * There is no constructor for this class. Use the GlideElement getED() method to obtain a GlideElementDescriptor object.
	 */
	declare class GlideElementDescriptor {
		/**
		 * Returns the encryption type used for attachments on the element's table.
		 */
		getAttachmentEncryptionType(): String;

		/**
		 * Returns the element's encryption type.
		 */
		getEncryptionType(): String;

		/**
		 * Returns the element's internal data type.
		 */
		getInternalType(): String;

		/**
		 * Returns the element's label.
		 */
		getLabel(): String;

		/**
		 * Returns the element's length.
		 */
		getLength(): Number;

		/**
		 * Returns the element's name.
		 */
		getName(): String;

		/**
		 * Returns the element's plural label.
		 */
		getPlural(): String;

		/**
		 * Returns true if an encrypted attachment has been added to the table.
		 */
		hasAttachmentsEncrypted(): Boolean;

		/**
		 * Returns true if the element is an automatically generated or system field.
		 */
		isAutoOrSysID(): Boolean;

		/**
		 * Returns true if the element is defined as a dropdown choice in its dictionary definition.
		 */
		isChoiceTable(): Boolean;

		/**
		 * Returns true if an element is encrypted.
		 */
		isEdgeEncrypted(): Boolean;

		/**
		 * Returns true if the element is a virtual element.
		 */
		isVirtual(): Boolean;

	}
	/**
	 * The scoped GlideEmailOutbound class implements the email object for scoped applications. You can use the GlideEmailOutbound methods with the email global object available in mail scripts. The email object behaves identically for global and scoped applications.
    * 
	 */
	declare class GlideEmailOutbound {
		/**
		 * Adds the address to either the cc or bcc list.
		 * @type Either cc or bcc, determines the list to which the address is added.
		 * @address The recipient's email address.
		 */
		addAddress(type: String, address: String): void;

		/**
		 * Adds the recipient to either the cc or bcc list, but uses the display name instead of the address when showing the recipient.
		 * @type Either cc or bcc, determines the list to which the address is added.
		 * @address The recipient's email address.
		 * @displayName The name to be shown instead of the email address.
		 */
		addAddress(type: String, address: String, displayName: String): void;

		/**
		 * Instantiates a scoped GlideEmailOutbound object.
		 */
		constructor();

		/**
		 * Returns the email's subject line.
		 */
		getSubject(): String;

		/**
		 * Returns the email's watermark.
		 */
		getWatermark(): String;

		/**
		 * Sets the body of the email.
		 * @bodyText The body of the email.
		 */
		setBody(bodyText: String): void;

		/**
		 * Sets the sender's address.
		 * @address The sender's email address.
		 */
		setFrom(address: String): void;

		/**
		 * Sets the reply to address.
		 * @address The reply to email address.
		 */
		setReplyTo(address: String): void;

		/**
		 * Sets the email's subject line.
		 * @subject Text for the subject line.
		 */
		setSubject(subject: String): void;

	}
	/**
	 * The Scoped GlideFilter API provides a method to determine if a record meets a specified set of requirements.
    * There is no constructor for Scoped GlideFilter. It is accessed by using the global object "GlideFilter".
	 */
	declare class GlideFilter {
		/**
		 * Compares a specified filter to the contents of a specified GlideRecord.
		 * @gr GlideRecord to evaluate.
		 * @filter Encoded query string (case-sensitive).
		 * @match Optional. Flag that indicates whether all conditions must be met if the filter parameter contains multiple conditions. Valid values: true: all conditions must be met for the method to return true false: only one of the conditions must be met for the method to return true Default: true
		 */
		checkRecord(gr: GlideRecord, filter: String, match: Boolean): Boolean;

	}
	/**
	 * The scoped GlideFormScratchpad class implements the g_scratchpad object for scoped applications.
    * The scoped GlideFormScratchpad class has no constructor and no methods. The g_scratchpad object behaves identically for global and scoped applications. The g_scratchpad object provides a mechanism for passing information from the server to the client when the client requires information not available on a form. This can be accomplished by creating a business rule to put the information in the g_scratchpad object and accessing the information in a client script.
	 */
	declare class GlideFormScratchpad {
	}
	/**
	 * GlideLocale provides information about display information for the local instance.
    * There is no constructor for a GlideLocale object. Use the get() method to get a GlideLocale object.
	 */
	declare class GlideLocale {
		/**
		 * Returns the GlideLocale object.
		 */
		get(): GlideLocale;

		/**
		 * Returns the decimal separator.
		 */
		getDecimalSeparator(): String;

		/**
		 * Returns the grouping separator.
		 */
		getGroupingSeparator(): String;

	}
	/**
	 * The scoped GlidePluginManager API provides a method for determining if a plugin has been activated.
    * 
	 */
	declare class GlidePluginManager {
		/**
		 * Determines if the specified plugin has been activated.
		 * @pluginID The plugin ID
		 */
		isActive(pluginID: String): Boolean;

	}
	/**
	 * The scoped GlideQueryCondition API provides additional AND or OR conditions that can be added to the current condition, allowing you to build complex queries.
    * Build complex queries such as: In the case of addCondition(), an implied AND is added. This class has no constructor. A GlideQueryCondition object is returned by the following methods: addActiveQuery() addInactiveQuery() addJoinQuery() addNotNullQuery() addNullQuery() addQuery() If there is a complicated set of AND and OR queries, a single encoded query containing all conditions simplifies the query creation. To simplify the query creation, create a query in a list view, right-click the query, and select Copy query. It creates a single encoded query string to return your result set. Use that string as a parameter in an addEncodedQuery() call. Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss. You can set the glide.invalid_query.returns_no_rows system property to true to have queries with invalid encoded queries return no records.
	 */
	declare class GlideQueryCondition {
		/**
		 * Adds an AND condition to the current condition.
		 * @name The name of a field.
		 * @oper (Optional) The operator for the query. If you do not specify an operator, the condition uses an equals operator.
		 * @value The value to query on.
		 */
		addCondition(name: String, oper: String, value: Object): GlideQueryCondition;

		/**
		 * Appends a 2-or-3 parameter OR condition to an existing GlideQueryCondition.
		 * @name Field name
		 * @oper (Optional) Query operator. The available values are dependent on the data type of the value parameter. Numbers: = != = Strings (must be in upper case): = != IN STARTSWITH ENDSWITH CONTAINS DOESNOTCONTAIN
		 * @value Value on which to query (not case-sensitive). Note: All passed in arrays must contain a minimum of two elements. Single element arrays are not supported.
		 */
		addOrCondition(name: String, oper: String, value: Object): GlideQueryCondition;

	}
	/**
	 * Scoped GlideRecord is used for database operations.
    * A GlideRecord contains both records and fields. For information about GlideRecordSecure, which is a class inherited from GlideRecord that performs the same functions as GlideRecord, and also enforces ACLs, see the GlideServer APIs. Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss. You can set the glide.invalid_query.returns_no_rows system property to true to have queries with invalid encoded queries return no records.
	 */
	declare class GlideRecord {
		/**
		 * Adds a filter to return active records.
		 */
		addActiveQuery(): QueryCondition;

		/**
		 * Adds an encoded query to other queries that may have been set.
		 * @query An encoded query string.
		 */
		addEncodedQuery(query: String): void;

		/**
		 * Applies a pre-defined GlideDBFunctionBuilder object to a record.
		 * @function_ A GlideDBFunctionBuilder object that defines a SQL operation.
		 */
		addFunction(function_: Object): void;

		/**
		 * Creates an instance of the GlideRecord class for the specified table.
		 * @tableName The table to be used.
		 */
		constructor(tableName: String);

		/**
		 * Adds a filter to return records based on a relationship in a related table.
		 * @joinTable Table name
		 * @primaryField (Optional) If other than sys_id, the primary field
		 * @joinTableField (Optional) If other than sys_id, the field that joins the tables.
		 */
		addJoinQuery(joinTable: String, primaryField: Object, joinTableField: Object): GlideQueryCondition;

		/**
		 * A filter that specifies records where the value of the field passed in the parameter is not null.
		 * @fieldName Name of the field to check.
		 */
		addNotNullQuery(fieldName: String): GlideQueryCondition;

		/**
		 * Adds a filter to return records where the value of the specified field is null.
		 * @fieldName Name of the field to check.
		 */
		addNullQuery(fieldName: String): GlideQueryCondition;

		/**
		 * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
		 * @name Table field name.
		 * @value Value on which to query (not case-sensitive).
		 */
		addQuery(name: String, value: Object): GlideQueryCondition;

		/**
		 * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
		 * @name Table field name.
		 * @operator Query operator. The available values are dependent on the data type of the value parameter. Numbers: = != = Strings (must be in upper case): = != IN NOT IN STARTSWITH ENDSWITH CONTAINS DOES NOT CONTAIN INSTANCEOF
		 * @value Value on which to query (not case-sensitive).
		 */
		addQuery(name: String, operator: String, value: Object): GlideQueryCondition;

		/**
		 * Adds a filter to return records using an encoded query string.
		 */
		addQuery(): GlideQueryCondition;

		/**
		 * Determines if the Access Control Rules, which include the user's roles, permit inserting new records in this table.
		 */
		canCreate(): Boolean;

		/**
		 * Determines if the Access Control Rules, which include the user's roles, permit deleting records in this table.
		 */
		canDelete(): Boolean;

		/**
		 * Determines if the Access Control Rules, which include the user's roles, permit reading records in this table.
		 */
		canRead(): Boolean;

		/**
		 * Determines if the Access Control Rules, which include the user's roles, permit editing records in this table.
		 */
		canWrite(): Boolean;

		/**
		 * Sets a range of rows to be returned by subsequent queries.
		 * @firstRow The first row to include. Because the index starts at 0, a value of 0 returns the first row.
		 * @lastRow The last row to include.
		 * @forceCount If true, the getRowCount() method will return all possible records.
		 */
		chooseWindow(firstRow: Number, lastRow: Number, forceCount: Boolean): void;

		/**
		 * Deletes multiple records that satisfy the query condition.
		 */
		deleteMultiple(): void;

		/**
		 * Deletes the current record.
		 */
		deleteRecord(): Boolean;

		/**
		 * Returns the specified record in an instantiated GlideRecord object.
		 * @name Optional. Name of the instantiated GlideRecord column to search for the specified value parameter. If only a single parameter is passed in, the method assumes that this parameter is sys_id.
		 * @value Value to match.
		 */
		get(name: Object, value: Object): Boolean;

		/**
		 * Returns the dictionary attributes for the specified field.
		 * @fieldName Field name for which to return the dictionary attributes
		 */
		getAttribute(fieldName: String): String;

		/**
		 * Returns the table's label.
		 */
		getClassDisplayValue(): String;

		/**
		 * Retrieves the display value for the current record.
		 */
		getDisplayValue(): String;

		/**
		 * Returns the element's descriptor.
		 */
		getED(): GlideElementDescriptor;

		/**
		 * Retrieves the GlideElement object for the specified field.
		 * @columnName Name of the column to get the element from.
		 */
		getElement(columnName: String): GlideElement;

		/**
		 * Retrieves the query condition of the current result set as an encoded query string.
		 */
		getEncodedQuery(): String;

		/**
		 * Returns the field's label.
		 */
		getLabel(): String;

		/**
		 * Retrieves the last error message. If there is no last error message, null is returned.
		 */
		getLastErrorMessage(): String;

		/**
		 * Retrieves a link to the current record.
		 * @noStack If true, the sysparm_stack parameter is not appended to the link. The parameter sysparm_stack specifies the page to visit after closing the current link.
		 */
		getLink(noStack: Boolean): String;

		/**
		 * Retrieves the class name for the current record.
		 */
		getRecordClassName(): String;

		/**
		 * Retrieves the number of rows in the query result.
		 */
		getRowCount(): Number;

		/**
		 * Retrieves the name of the table associated with the GlideRecord.
		 */
		getTableName(): String;

		/**
		 * Gets the primary key of the record, which is usually the sys_id unless otherwise specified.
		 */
		getUniqueValue(): String;

		/**
		 * Retrieves the string value of an underlying element in a field.
		 * @name The name of the field to get the value from.
		 */
		getValue(name: String): String;

		/**
		 * Determines if there are any more records in the GlideRecord object.
		 */
		hasNext(): Boolean;

		/**
		 * Creates an empty record suitable for population before an insert.
		 */
		initialize(): void;

		/**
		 * Inserts a new record using the field values that have been set for the current record.
		 */
		insert(): String;

		/**
		 * Checks to see if the current database action is to be aborted.
		 */
		isActionAborted(): Boolean;

		/**
		 * Verifies whether the specified encoded query is valid.
		 * @query Encoded query to validate.
		 */
		isEncodedQueryValid(query: String): Boolean;

		/**
		 * Checks if the current record is a new record that has not yet been inserted into the database.
		 */
		isNewRecord(): Boolean;

		/**
		 * Determines if the table exists.
		 */
		isValid(): Boolean;

		/**
		 * Determines if the specified field is defined in the current table.
		 * @columnName The name of the the field.
		 */
		isValidField(columnName: String): Boolean;

		/**
		 * Determines if a record was actually returned by the query/get record operation.
		 */
		isValidRecord(): Boolean;

		/**
		 * Creates a new GlideRecord record, sets the default values for the fields, and assigns a unique ID to the record.
		 */
		newRecord(): void;

		/**
		 * Moves to the next record in the GlideRecord object.
		 */
		next(): Boolean;

		/**
		 * Retrieves the current operation being performed, such as insert, update, or delete.
		 */
		operation(): String;

		/**
		 * Specifies an orderBy column.
		 * @name The column name used to order the records in this GlideRecord object.
		 */
		orderBy(name: String): void;

		/**
		 * Specifies a decending orderBy column.
		 * @name The column name to be used to order the records in a GlideRecord object.
		 */
		orderByDesc(name: String): void;

		/**
		 * Runs the query against the table based on the filters specified by addQuery, addEncodedQuery, etc.
		 * @field Column name to query on.
		 * @value Value to query for.
		 */
		query(field: Object, value: Object): void;

		/**
		 * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted. This is often used in business rules.
		 * @b True to abort the next action. False if the action is to be allowed.
		 */
		setAbortAction(b: Boolean): void;

		/**
		 * Sets the limit for number of records are fetched by the GlideRecord query.
		 * @maxNumRecords The maximum number of records to fetch.
		 */
		setLimit(maxNumRecords: Number): void;

		/**
		 * Sets sys_id value for the current record.
		 * @guid The GUID to be assigned to the current record.
		 */
		setNewGuidValue(guid: String): void;

		/**
		 * Sets the value of the field with the specified name to the specified value.
		 * @name Name of the field.
		 * @value The value to assign to the field.
		 */
		setValue(name: String, value: Object): void;

		/**
		 * Enables or disables the running of business rules, script engines, and audit.
		 * @enable If true (default), enables business rules. If false, disables business rules.
		 */
		setWorkflow(enable: Boolean): void;

		/**
		 * Updates the GlideRecord with any changes that have been made. If the record does not already exist, it is inserted.
		 * @reason Optional. Reason for the update. The reason appears in the audit record.
		 */
		update(reason: String): String;

		/**
		 * Updates each GlideRecord in a stated query with a specified set of changes.
		 */
		updateMultiple(): void;

		/**
		 * Moves to the next record in the GlideRecord. Provides the same functionality as next(), it is intended to be used in cases where the GlideRecord has a column named next.
		 */
		_next(): Boolean;

		/**
		 * Identical to query(). This method is intended to be used on tables where there is a column named query, which would interfere with using the query() method.
		 * @name Column name on which to query
		 * @value Value for which to query
		 */
		_query(name: Object, value: Object): void;

	}
	/**
	 * The scoped GlideSchedule API provides methods for performing operations on GlideSchedule objects, such as adding new schedule segments to a schedule, determining if a datetime is within the schedule, or setting the schedule timezone.
    * 
	 */
	declare class GlideSchedule {
		/**
		 * Adds a new schedule segment to the current schedule.
		 * @startDate The starting date of the new schedule segment.
		 * @offSet The time offset of the new schedule segment.
		 */
		add(startDate: GlideDateTime, offSet: GlideDuration): GlideDateTime;

		/**
		 * Instantiates an empty GlideSchedule object.
		 */
		constructor();

		/**
		 * Instantiates a GlideSchedule object and loads the schedule information. If a timezone is not specified or is nil, the current session timezone is used.
		 * @sysID The system ID for the schedule.
		 * @timeZone The time zone. (Optional)
		 */
		constructor(sysID: String, timeZone: String);

		/**
		 * Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session.
		 * @startDate The starting datetime.
		 * @endDate The ending datetime.
		 */
		duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;

		/**
		 * Retrieves the schedule name.
		 */
		getName(): String;

		/**
		 * Determines if the given datetime is within the current schedule.
		 * @time The datetime value to check.
		 */
		isInSchedule(time: GlideDateTime): Boolean;

		/**
		 * Determines if the current schedule is valid. A schedule is valid if it has at least one schedule span.
		 */
		isValid(): Boolean;

		/**
		 * Loads a schedule with the schedule information.
		 * @sysID The system ID of the schedule.
		 * @timeZone (Optional) The timezone. If a timezone is not specified, or is nil, the current session timezone is used for the schedule.
		 * @excludeSpanID Any span to exclude.
		 */
		load(sysID: String, timeZone: String, excludeSpanID: String): void;

		/**
		 * Sets the timezone for the current schedule.
		 * @timeZone The timezone.
		 */
		setTimeZone(timeZone: String): void;

		/**
		 * Determines how much time (in milliseconds) until start time of the next schedule item.
		 * @time Time to be evaluated
		 * @timeZone Timezone
		 */
		whenNext(time: GlideDateTime, timeZone: String): Number;

	}
	/**
	 * The GlideScopedEvaluator API allows you to evaluate scripts in a GlideRecord field from both scoped and global server scripts.
    * The GlideScopedEvaluator API evaluates records with script fields defined. The scope of the script is defined by the scope of the record.
	 */
	declare class GlideScopedEvaluator {
		/**
		 * Instantiates a GlideScopedEvaluator object.
		 */
		constructor();

		/**
		 * Evaluates a script from a GlideRecord field.
		 * @grObj The GlideRecord containing a script expression.
		 * @scriptField (Optional) The name of the field containing the script expression.
		 * @variables (Optional) A map of variables with name-value pairs. These variables are available to the script during execution of this method.
		 */
		evaluateScript(grObj: GlideRecord, scriptField: String, variables: Object): Object;

		/**
		 * Returns a variable from a GlideScopedEvaluator object.
		 * @name The name of the variable.
		 */
		getVariable(name: String): Object;

		/**
		 * Puts a variable into the GlideScopedEvaluator object. These variables are available to the script that this GlideScopedEvaluator object runs.
		 * @name The name of the variable.
		 * @value The value of the variable.
		 */
		putVariable(name: String, value: Object): void;

	}
	/**
	 * A GlideScriptableInputStream object cannot be instantiated directly, but is used as an opaque object which is used to connect an input stream from GlideSysAttachment.getContentStream() with other streaming APIs, such as GlideTextReader, GlideDigest, and XMLDocument2.
    * See the scoped GlideSysAttachment API for methods that return a GlideScriptableInputStream object. The scoped GlideTextReader constructor requires a GlideScriptableInputStream object as an input parameter.
	 */
	declare class GlideScriptableInputStream {
	}
	/**
	 * ServiceNow processors are equivalent to Java servlets.
    * Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript code and produce output such as TEXT, JSON, or HTML. The GlideScriptedProcessor APIs are used in processor scripts to access the the processor (servlet) capabilities. There are no constructors for the GlideScriptedProcessor APIs. The methods are called using the global variable g_processor. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/.do? = where the path endpoint and parameter endpoint are defined on the processor form.
	 */
	declare class GlideScriptedProcessor {
		/**
		 * Redirects to the specified URL.
		 * @url the destination URL
		 */
		redirect(url: String): void;

		/**
		 * Encodes an object as a JSON string and writes it to the current URL.
		 * @o The object to encode to a JSON string.
		 */
		writeJSON(o: Object): void;

		/**
		 * Writes the specified string to the current URL in the specified character-encoding.
		 * @contentType Sets the content type of the response sent to the client, if the response has not been committed, and may include a character-encoding specification.
		 * @s The string to write.
		 */
		writeOutput(contentType: String, s: String): void;

		/**
		 * Writes the specified string to the current URL.
		 * @s The string to write.
		 */
		writeOutput(s: String): void;

	}
	/**
	 * The scoped GlideSecureRandomUtil API provides methods for generating integers, long values, and strings.
    * There is no constructor for this class. Methods are accessed through the static object GlideSecureRandomUtil. The GlideSecureRandomUtil class is available in both global and scoped applications.
	 */
	declare class GlideSecureRandomUtil {
		/**
		 * Generates a pseudo-random integer.
		 */
		getSecureRandomInt(): Number;

		/**
		 * Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value that you pass into the method.
		 * @bound The bound value.
		 */
		getSecureRandomIntBound(bound: Number): Number;

		/**
		 * Generates pseudo-random long value.
		 */
		getSecureRandomLong(): Number;

		/**
		 * Generates a random alpha-numeric String with the specified length.
		 * @length The length of the string in number of characters.
		 */
		getSecureRandomString(length: Number): String;

	}
	/**
	 * Provides methods to work with URLs.
    * Access these methods using the static object GlideSecurityUtils. This class is available in scoped and global scripts.
	 */
	declare class GlideSecurityUtils {
		/**
		 * Removes suspicious encoding to prevent reflected or DOM based cross site scripting.
		 * @url The URL to be checked.
		 */
		cleanURL(url: String): String;

		/**
		 * Removes the domain address from the URL, which leaves the page name and parameters.
		 * @url The URL to be turned into a relative URL.
		 */
		enforceRelativeURL(url: String): String;

		/**
		 * Add escape characters to a script.
		 * @script The script to have escape characters added.
		 */
		escapeScript(script: String): String;

		/**
		 * Check the specified URL against the system defined white list.
		 * @url The URL to be checked against the URL white list.
		 */
		isURLWhiteListed(url: String): Boolean;

	}
	/**
	 * The GlideServletRequest API is used in processor scripts.
    * ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript code and produce output such as TEXT, JSON, or HTML. The GlideServletRequest API is used in processor scripts to access the HttpServletRequest object. The GlideServletRequest object provides a subset of the HttpServletRequest APIs. The methods are called using the global variable g_request. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/.do? = where the path endpoint and parameter endpoint are defined on the processor form.
	 */
	declare class GlideServletRequest {
		/**
		 * Returns the MIME type of the body of the request.
		 */
		getContentType(): String;

		/**
		 * Returns the header value.
		 * @name The name of the header to be retrieved.
		 */
		getHeader(name: String): String;

		/**
		 * Returns a comma-separated list of header names.
		 */
		getHeaderNames(): String;

		/**
		 * Returns the header values.
		 * @name Names of the headers to be retrieved.
		 */
		getHeaders(name: String): String;

		/**
		 * Returns the value of the parameter contained in the request URL.
		 * @name The name of the parameter to be retrieved. This can be the parameter endpoint from the processor form.
		 */
		getParameter(name: String): Strings;

		/**
		 * Returns a list of the parameter names found in the request URL.
		 */
		getParameterNames(): String;

		/**
		 * Returns the query string from the request.
		 */
		getQueryString(): String;

	}
	/**
	 * The GlideServletResponse API is used in processor scripts.
    * ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript code and produce output such as TEXT, JSON, or HTML. The GlideServletResponse API is used in processor scripts to access the HttpServletResponse object. The GlideServletResponse object provides a subset of the HttpServletResponse APIs. The methods are called using the global variable g_response. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/.do? = where the path endpoint and parameter endpoint are defined on the processor form.
	 */
	declare class GlideServletResponse {
		/**
		 * Sends a temporary redirect to the client.
		 * @location The URL to receive the response.
		 */
		sendRedirect(location: String): void;

		/**
		 * Sets the MIME type of the response
		 * @type The MIME type.
		 */
		setContentType(type: String): void;

		/**
		 * Sets a response header to the specified value.
		 * @key Specifies the header.
		 * @value The value to be assigned to the header. If the header exists, it is over written.
		 */
		setHeader(key: String, value: String): void;

		/**
		 * Sets the status code for the response.
		 * @status The status to be set.
		 */
		setStatus(status: Number): void;

	}
	/**
	 * The scoped GlideSession API provides a way to find information about the current session.
    * There are no constructors for creating an instance of a scoped GlideSession object. Instead, use the getSession() method of the scoped GlideSystem API.
	 */
	declare class GlideSession {
		/**
		 * Retrieves a session client value previously set with putClientData().
		 * @paramName Name of the client data to retrieve.
		 */
		getClientData(paramName: String): String;

		/**
		 * Returns the client IP address.
		 */
		getClientIP(): String;

		/**
		 * Returns the application currently selected in the application picker.
		 */
		getCurrentApplicationId(): String;

		/**
		 * Returns the session's language code.
		 */
		getLanguage(): String;

		/**
		 * Returns the session token.
		 */
		getSessionToken(): String;

		/**
		 * Returns the name of the session's time zone.
		 */
		getTimeZoneName(): String;

		/**
		 * Returns the URL on the stack. Returns null if the stack is empty.
		 */
		getUrlOnStack(): String;

		/**
		 * Returns true if the user is impersonating another user.
		 */
		isImpersonating(): Boolean;

		/**
		 * Returns true if the session is interactive.
		 */
		isInteractive(): Boolean;

		/**
		 * Returns true if the user is logged in.
		 */
		isLoggedIn(): Boolean;

		/**
		 * Sets a session client value that can be retrieved with getClientData(). This method is used in a server side script that runs when a form is created.
		 * @paramName Name of the client data to set.
		 * @paramValue Value of the client data.
		 */
		putClientData(paramName: String, paramValue: String): void;

	}
	/**
	 * The GlideSPScriptable API provides a set of methods for use in Service Portal Widgets.
    * You access GlideSPScriptable methods by using the global $sp object.
	 */
	declare class GlideSPScriptable {
		/**
		 * Returns true if the user can read the specified GlideRecord.
		 * @gr The GlideRecord to check.
		 */
		canReadRecord(gr: GlideRecord): Boolean;

		/**
		 * Returns true if the user can read the specified GlideRecord.
		 * @table Name of the table to query.
		 * @sysId Sys_id of the record to query.
		 */
		canReadRecord(table: String, sysId: String): Boolean;

		/**
		 * Returns a model and view model for a sc_cat_item or sc_cat_item_guide.
		 * @sysId The sys_id of the catalog item ( sc_cat_item) or order guide ( sc_cat_item_guide).
		 */
		getCatalogItem(sysId: String): Object;

		/**
		 * Returns a model and view model for a sc_cat_item or sc_cat_item_guide.
		 * @sysId The sys_id of the catalog item ( sc_cat_item) or order guide ( sc_cat_item_guide).
		 * @isOrdering When true, uses create roles security check. When false, uses write roles security check. When users are ordering an item or have it in their cart, check using the create roles. If users are not ordering, for example, somebody is looking at a requested item to see the variables associated with that item, then check using the write roles.
		 */
		getCatalogItem(sysId: String, isOrdering: Boolean): Object;

		/**
		 * Returns the display value of the specified field (if it exists and has a value) from either the widget's sp_instance or the sp_portal record.
		 * @fieldName Name of the field
		 */
		getDisplayValue(fieldName: String): String;

		/**
		 * Returns information about the specified field in the specified GlideRecord.
		 * @gr The GlideRecord to check
		 * @fieldName The field to find information for
		 */
		getField(gr: GlideRecord, fieldName: String): Object;

		/**
		 * Checks the specified list of field names, and returns an array of valid field names.
		 * @gr The GlideRecord to check
		 * @fieldNames A comma separated list of field names.
		 */
		getFields(gr: GlideRecord, fieldNames: String): Array;

		/**
		 * Checks the specified list of field names and returns an object of valid field names.
		 * @gr The GlideRecord to check
		 * @fieldNames A comma separated list of field names.
		 */
		getFieldsObject(gr: GlideRecord, fieldNames: String): Object;

		/**
		 * Return the form.
		 * @tableName The name of the table
		 * @sysId The form's sys_id
		 */
		getForm(tableName: String, sysId: String): Object;

		/**
		 * Returns KB articles in the specified category and its subcategories.
		 * @sys_id Sys_id of the KB article category.
		 * @limit Maximum number of KB articles returned.
		 */
		getKBCategoryArticles(sys_id: String, limit: Number): Array;

		/**
		 * Returns Knowledge Base article summaries in the specified category and its subcategories.
		 * @sys_id Sys_id of the KB article category.
		 * @limit Maximum number of KB articles returned.
		 * @maxChars Maximum number of characters to return from the article text. For full article text, set the value to -1.
		 */
		getKBCategoryArticleSummaries(sys_id: String, limit: Number, maxChars: Number): Array;

		/**
		 * Returns the number of articles in the defined Knowledge Base.
		 * @sys_id Sys_id of a Knowledge Base record.
		 */
		getKBCount(sys_id: String): Number;

		/**
		 * Returns a list of the specified table's columns in the specified view.
		 * @tableName Name of the table
		 * @view The view by which to filter the columns
		 */
		getListColumns(tableName: String, view: String): Object;

		/**
		 * Returns the (?id=) portion of the URL based on the sp_menu type.
		 * @page The page
		 */
		getMenuHREF(page: GlideRecord): String;

		/**
		 * Returns an array of menu items for the specified instance.
		 * @sysId sysId of the instance
		 */
		getMenuItems(sysId: String): Array;

		/**
		 * Returns the value of the specified parameter.
		 * @name The name of the key from the query string or post body.
		 */
		getParameter(name: String): Object;

		/**
		 * Returns the portal GlideRecord from the Service Portals [sp_portal] table.
		 */
		getPortalRecord(): GlideRecord;

		/**
		 * If parameters are provided, returns the GlideRecord identified by the provided table and Sys ID. If no parameters are provided, returns the record identified by the current URL.
		 * @table Optional. The table of the record to return. If no parameters are included, returns the table and Sys ID identified by the current URL.
		 * @sys_id Optional. The Sys ID of the record to return. If no parameters are included, returns the record identified by the current URL.
		 */
		getRecord(table: String, sys_id: String): GlideRecord;

		/**
		 * Copies display values for the specified fields into the data parameter.
		 * @data The display values for the specified fields are copied to this object.
		 * @from The GlideRecord to process.
		 * @names A comma-separated list of field names.
		 */
		getRecordDisplayValues(data: Object, from: GlideRecord, names: String): void;

		/**
		 * For the specified fields, copies the element's name, display value, and value into the data parameter.
		 * @data The element's name, display value, and value for the specified fields are copied to this object.
		 * @from The GlideRecord to process.
		 * @names A comma-separated list of field names.
		 */
		getRecordElements(data: Object, from: GlideRecord, names: String): void;

		/**
		 * Copies values for the specified field names from the GlideRecord into the data parameter.
		 * @data The value for the specified fields are copied to this object.
		 * @from The GlideRecord to process.
		 * @names A comma-separated list of field names.
		 */
		getRecordValues(data: Object, from: GlideRecord, names: String): void;

		/**
		 * Returns Service Catalog variables associated with a record in String format.
		 * @gr The record to retrieve Service Catalog variables for. Must be a record with Service Catalog variables defined, such as a requested item [sc_req_item] record or an incident submitted through a record producer.
		 * @includeNilResponses Optional. If true, the API includes variables with no user-defined value.
		 */
		getRecordVariables(gr: GlideRecord, includeNilResponses: Boolean): String;

		/**
		 * Returns an array of Service Catalog variables associated with a record.
		 * @gr The record to retrieve Service Catalog variables for. Must be a record with Service Catalog variables defined, such as a requested item [sc_req_item] record or an incident submitted through a record producer.
		 * @includeNilResponses Optional. If true, the API includes variables with no user-defined value.
		 */
		getRecordVariablesArray(gr: GlideRecord, includeNilResponses: Boolean): Object;

		/**
		 * Gets the activity stream for the specified record. This method works on tables that extend the task table.
		 * @table The table name
		 * @sysID The sys_id of the record
		 */
		getStream(table: String, sysID: String): Object;

		/**
		 * Returns the user's initials.
		 */
		getUserInitials(): String;

		/**
		 * Returns the named value of the JSON request, instance, or portal.
		 * @name Name of the JSON request, instance, or portal.
		 */
		getValue(name: String): Object;

		/**
		 * Copies values from the request or instance to the data parameter.
		 * @data Receives the parameter values.
		 * @names Comma-separated string of field names.
		 */
		getValues(data: Object, names: String): void;

		/**
		 * Returns an array of Service Catalog variables associated with the record in the URL.
		 * @includeNilResponses Optional. If true, the API includes variables with no user-defined value.
		 */
		getVariablesArray(includeNilResponses: Boolean): Object;

		/**
		 * Gets a widget by id or sys_id, executes that widget's server script using the provided options, then returns the widget model.
		 * @sysID The widget sys_id or widget_id
		 * @options An object to pass to the widget's server script. Refer to this object as options in your server script. Note: Any options passed into this function will only be available in the embedded widget's server script on the first execution of that script. Any subsequent calls into the server script from the embedded widget will not contain the object properties passed in.
		 */
		getWidget(sysID: String, options: Object): Object;

		/**
		 * Transforms a URL requesting a list or form in the platform UI into the URL of the corresponding id=list or id=form Service Portal page.
		 * @url Platform UI URL
		 */
		mapUrlToSPUrl(url: String): String;

	}
	/**
	 * Provides string handling methods.
    * Access these methods using the static object GlideStringUtil. This class is available in scoped and global scripts.
	 */
	declare class GlideStringUtil {
		/**
		 * Replaces periods with underscore characters.
		 * @sourceString The string to be processed.
		 */
		dotToUnderBar(sourceString: String): String;

		/**
		 * Remove quotes from a string.
		 * @sourceString The string to be processed.
		 */
		escapeAllQuotes(sourceString: String): String;

		/**
		 * Use for home pages to replace problem characters with escape characters.
		 * @sourceString The string to be processed.
		 */
		escapeForHomePage(sourceString: String): String;

		/**
		 * Use to replace illegal characters with their escape codes.
		 * @htmlString The string to be processed.
		 */
		escapeHTML(htmlString: String): String;

		/**
		 * Replaces non-printable characters with their printable notation.
		 * @sourceString The string to be processed.
		 */
		escapeNonPrintable(sourceString: String): String;

		/**
		 * Replaces query term separators "^" with their escape sequence "^^".
		 * @sourceString The string to be processed.
		 */
		escapeQueryTermSeparator(sourceString: String): String;

		/**
		 * Replace quotes with escape characters by adding a backslash before each quote.
		 * @sourceString The string to be processed.
		 */
		escapeTicks(sourceString: String): String;

		/**
		 * Use to replace illegal HTML characters into HTML notation.
		 * @sourceString The string to be processed.
		 */
		getHTMLValue(sourceString: String): String;

		/**
		 * Extract numeric characters from a string.
		 * @sourceString The string to be processed.
		 */
		getNumeric(sourceString: String): String;

		/**
		 * Returns true if the specified string is a valid base64 string.
		 * @sourceString The string to be processed.
		 */
		isBase64(sourceString: String): Boolean;

		/**
		 * Returns true if the specified string is in valid sys ID format.
		 * @sourceString The string to be processed.
		 */
		isEligibleSysID(sourceString: String): Boolean;

		/**
		 * Replaces the new line character, "/n", with a break code "".
		 * @sourceString The string to be processed.
		 */
		newLinesToBreaks(sourceString: String): String;

		/**
		 * Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading, trailing, and duplicate spaces.
		 * @sourceString The string to be processed.
		 */
		normalizeWhitespace(sourceString: String): String;

		/**
		 * Replaces escape characters with their respective character.
		 * @htmlString String to process.
		 */
		unEscapeHTML(htmlString: String): String;

	}
	/**
	 * The GlideSysAttachment API provides a way to handle attachments.
    * Content is returned as a string, not as a byte array when getContent() is called. Content is returned as a GlideScriptableInputStream object when getContentStream() is called. The GlideScriptableInputStream contains the actual bytes not converted into a String.
	 */
	declare class GlideSysAttachment {
		/**
		 * Creates an instance of the GlideSysAttachment class.
		 */
		constructor();

		/**
		 * Copies attachments from the source record to the target record.
		 * @sourceTable Name of the table with the attachments to be copied.
		 * @sourceID The source table's sysID.
		 * @targetTable Name of the table to have the attachments added.
		 * @targetID The target table's sysID.
		 */
		copy(sourceTable: String, sourceID: String, targetTable: String, targetID: String): String;

		/**
		 * Deletes the specified attachment.
		 * @attachmentID The attachment's sysID.
		 */
		deleteAttachment(attachmentID: String): void;

		/**
		 * Returns the attachment content as a string.
		 * @sysAttachment The attachment record.
		 */
		getContent(sysAttachment: GlideRecord): String;

		/**
		 * Returns the attachment content as a string with base64 encoding.
		 * @sysAttachment The attachment record.
		 */
		getContentBase64(sysAttachment: GlideRecord): String;

		/**
		 * Returns a GlideScriptableInputStream object given the sysID of an attachment.
		 * @sysID The attachment sysID.
		 */
		getContentStream(sysID: String): GlideScriptableInputStream;

		/**
		 * Inserts an attachment for the specified record.
		 * @record The record to which the attachment is to be attached.
		 * @fileName The attachment's file name.
		 * @contentType The attachment's content type.
		 * @content The attachment content.
		 */
		write(record: GlideRecord, fileName: String, contentType: String, content: String): String;

		/**
		 * Inserts an attachment for the specified record using base64 encoded content.
		 * @gr The record to which the attachment is to be attached.
		 * @fileName The attachment's file name.
		 * @contentType The attachment's content type.
		 * @content The attachment content in base64 format.
		 */
		writeBase64(gr: GlideRecord, fileName: String, contentType: String, content: String): String;

		/**
		 * Inserts an attachment using the input stream.
		 * @gr The record to which the attachment is to be attached.
		 * @fileName The attachment's file name.
		 * @contentType The attachment's content type.
		 * @content The attachment content.
		 */
		writeContentStream(gr: GlideRecord, fileName: String, contentType: String, content: GlideScriptableInputStream): String;

	}
	/**
	 * The scoped GlideSysListControl class allows you to determine if the New or Edit buttons are displayed.
    * 
	 */
	declare class GlideSysListControl {
		/**
		 * Instantiates a GlideSysListControl object.
		 * @tableName Name of the table
		 */
		constructor(tableName: String);

		/**
		 * Returns the sys_id for the control.
		 */
		getControlID(): String;

		/**
		 * Returns true if the edit button is not displayed.
		 */
		isOmitEditButton(): Boolean;

		/**
		 * Returns true when the New button is not displayed.
		 */
		isOmitNewButton(): Boolean;

	}
	/**
	 * The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc.
    * Many of the GlideSystem methods facilitate the easy inclusion of dates in query ranges, and are most often used in filters and reporting.
	 */
	declare class GlideSystem {
		/**
		 * Adds an error message for the current session.
		 * @message The message to add.
		 */
		addErrorMessage(message: Object): void;

		/**
		 * Adds an info message for the current session. This method is not supported for asynchronous business rules.
		 * @message An info message object.
		 */
		addInfoMessage(message: Object): void;

		/**
		 * Returns an ASCII string from the specified base64 string.
		 * @source A base64 encoded string.
		 */
		base64Decode(source: String): String;

		/**
		 * Creates a base64 string from the specified string.
		 * @source The string to be encoded.
		 */
		base64Encode(source: String): String;

		/**
		 * Returns the date and time for the beginning of last month in GMT.
		 */
		beginningOfLastMonth(): String;

		/**
		 * Returns the date and time for the beginning of last week in GMT.
		 */
		beginningOfLastWeek(): String;

		/**
		 * Returns the date and time for the beginning of next month in GMT.
		 */
		beginningOfNextMonth(): String;

		/**
		 * Returns the date and time for the beginning of next week in GMT.
		 */
		beginningOfNextWeek(): String;

		/**
		 * Returns the date and time for the beginning of next year in GMT.
		 */
		beginningOfNextYear(): String;

		/**
		 * Returns the date and time for the beginning of this month in GMT.
		 */
		beginningOfThisMonth(): String;

		/**
		 * Returns the date and time for the beginning of this quarter in GMT.
		 */
		beginningOfThisQuarter(): String;

		/**
		 * Returns the date and time for the beginning of this week in GMT.
		 */
		beginningOfThisWeek(): String;

		/**
		 * Returns the date and time for the beginning of this year in GMT.
		 */
		beginningOfThisYear(): String;

		/**
		 * Generates a date and time for the specified date in GMT.
		 * @date Format: yyyy-mm-dd
		 * @range Start, end, or a time in the 24 hour format hh:mm:ss.
		 */
		dateGenerate(date: String, range: String): String;

		/**
		 * Returns the date and time for a specified number of days ago.
		 * @days Integer number of days
		 */
		daysAgo(days: Number): String;

		/**
		 * Returns the date and time for the end of the day a specified number of days ago.
		 * @days Integer number of days
		 */
		daysAgoEnd(days: Number): String;

		/**
		 * Returns the date and time for the beginning of the day a specified number of days ago.
		 * @days Integer number of days
		 */
		daysAgoStart(days: String): String;

		/**
		 * Writes a debug message to the system log.
		 * @message The log message with place holders for any variable arguments.
		 * @param1 (Optional) First variable argument.
		 * @param2 (Optional) Second variable argument.
		 * @param3 (Optional) Third variable argument.
		 * @param4 (Optional) Fourth variable argument.
		 * @param5 (Optional) Fifth variable argument.
		 */
		debug(message: String, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object): void;

		/**
		 * Returns the date and time for the end of last month in GMT.
		 */
		endOfLastMonth(): String;

		/**
		 * Returns the date and time for the end of last week in GMT.
		 */
		endOfLastWeek(): String;

		/**
		 * Returns the date and time for the end of last year in GMT.
		 */
		endOfLastYear(): String;

		/**
		 * Returns the date and time for the end of next month in GMT.
		 */
		endOfNextMonth(): String;

		/**
		 * Returns the date and time for the end of next week in GMT.
		 */
		endOfNextWeek(): String;

		/**
		 * Returns the date and time for the end of next year in GMT.
		 */
		endOfNextYear(): String;

		/**
		 * Returns the date and time for the end of this month in GMT.
		 */
		endOfThisMonth(): String;

		/**
		 * Returns the date and time for the end of this quarter in GMT.
		 */
		endOfThisQuarter(): String;

		/**
		 * Returns the date and time for the end of this week in GMT.
		 */
		endOfThisWeek(): String;

		/**
		 * Returns the date and time for the end of this year in GMT.
		 */
		endOfThisYear(): String;

		/**
		 * Writes an error message to the system log.
		 * @message The log message with place holders for any variable arguments.
		 * @param1 (Optional) First variable argument.
		 * @param2 (Optional) Second variable argument.
		 * @param3 (Optional) Third variable argument.
		 * @param4 (Optional) Fourth variable argument.
		 * @param5 (Optional) Fifth variable argument.
		 */
		error(message: String, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object): void;

		/**
		 * Queues an event for the event manager.
		 * @name Name of the event being queued.
		 * @instance GlideRecord object, such as "current".
		 * @parm1 (Optional) Saved with the instance if specified.
		 * @parm2 (Optional) Saved with the instance if specified.
		 * @queue Name of the queue.
		 */
		eventQueue(name: String, instance: Object, parm1: String, parm2: String, queue: String): void;

		/**
		 * Queues an event for the event manager at a specified date and time.
		 * @name Name of the event being queued.
		 * @instance GlideRecord object, such as "current".
		 * @parm1 (Optional) Saved with the instance if specified.
		 * @parm2 (Optional) Saved with the instance if specified.
		 * @expiration Date and time to process this event..
		 */
		eventQueueScheduled(name: String, instance: Object, parm1: String, parm2: String, expiration: Object): void;

		/**
		 * Executes a job for a scoped application.
		 * @job The job to be run.
		 */
		executeNow(job: GlideRecord): String;

		/**
		 * Generates a GUID that can be used when a unique identifier is required.
		 */
		generateGUID(): String;

		/**
		 * Gets the caller scope name; returns null if there is no caller.
		 */
		getCallerScopeName(): String;

		/**
		 * Gets a string representing the cache version for a CSS file.
		 */
		getCssCacheVersionString(): String;

		/**
		 * Gets the ID of the current application as set using the Application Picker.
		 */
		getCurrentApplicationId(): String;

		/**
		 * Gets the name of the current scope.
		 */
		getCurrentScopeName(): String;

		/**
		 * Returns the list of error messages for the session that were added by addErrorMessage().
		 */
		getErrorMessages(): String;

		/**
		 * Retrieves a message from UI messages that has HTML special characters, and replaces them with escape sequences. For example, & becomes &.
		 * @id ID of the message.
		 * @args Optional. List of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users.
		 */
		getEscapedMessage(id: String, args: Array): String;

		/**
		 * Retrieves a message from UI messages.
		 * @id The ID of the message.
		 * @args (Optional) a list of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users.
		 */
		getMessage(id: String, args: Array): String;

		/**
		 * Gets the value of a Glide property. If the property is not found, returns an alternate value.
		 * @key The key for the property whose value should be returned.
		 * @alt (Optional) Alternate object to return if the property is not found.
		 */
		getProperty(key: String, alt: Object): String;

		/**
		 * Gets a reference to the current Glide session.
		 */
		getSession(): String;

		/**
		 * Retrieves the GlideSession session ID.
		 */
		getSessionID(): String;

		/**
		 * This method is no longer available. Instead, use gs.getSession().getSessionToken().
		 */
		getSessionToken(): String;

		/**
		 * Returns the name of the time zone associated with the current user.
		 */
		getTimeZoneName(): String;

		/**
		 * Gets the current URI for the session.
		 */
		getUrlOnStack(): String;

		/**
		 * Returns a reference to the scoped GlideUser object for the current user.
		 */
		getUser(): GlideUser;

		/**
		 * Gets the display name of the current user.
		 */
		getUserDisplayName(): String;

		/**
		 * Gets the sys_id of the current user.
		 */
		getUserID(): String;

		/**
		 * Gets the user name, or user id, of the current user.
		 */
		getUserName(): String;

		/**
		 * Determines if the current user has the specified role.
		 * @role The role to check.
		 */
		hasRole(role: Object): Boolean;

		/**
		 * Returns the date and time for a specified number of hours ago.
		 * @hours Integer number of hours
		 */
		hoursAgo(hours: Number): String;

		/**
		 * Returns the date and time for the end of the hour a specified number of hours ago.
		 * @hours Integer number of hours
		 */
		hoursAgoEnd(hours: Number): String;

		/**
		 * Returns the date and time for the start of the hour a specified number of hours ago.
		 * @hours Integer number of hours
		 */
		hoursAgoStart(hours: Number): String;

		/**
		 * Provides a safe way to call from the sandbox, allowing only trusted scripts to be included.
		 * @name The name fo the script to include.
		 */
		include(name: String): Boolean;

		/**
		 * Writes an info message to the system log.
		 * @message The log message with place holders for any variable arguments.
		 * @param1 (Optional) First variable argument.
		 * @param2 (Optional) Second variable argument.
		 * @param3 (Optional) Third variable argument.
		 * @param4 (Optional) Fourth variable argument.
		 * @param5 (Optional) Fifth variable argument.
		 */
		info(message: String, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object): void;

		/**
		 * Determines if debugging is active for a specific scope.
		 */
		isDebugging(): Boolean;

		/**
		 * Checks if the current session is interactive. An example of an interactive session is when a user logs in normally. An example of a non-interactive session is using a SOAP request to retrieve data.
		 */
		isInteractive(): Boolean;

		/**
		 * Determines if the current user is currently logged in.
		 */
		isLoggedIn(): Boolean;

		/**
		 * You can determine if a request comes from a mobile device.
		 */
		isMobile(): Boolean;

		/**
		 * Returns the date and time for the end of the minute a specified number of minutes ago.
		 * @minutes Integer number of minutes
		 */
		minutesAgoEnd(minutes: Number): String;

		/**
		 * Returns the date and time for the start of the minute a specified number of minutes ago.
		 * @minutes Integer number of minutes
		 */
		minutesAgoStart(minutes: Number): String;

		/**
		 * Returns the date and time for a specified number of months ago.
		 * @months Integer number of months
		 */
		monthsAgo(months: Number): String;

		/**
		 * Returns the date and time for the start of the month a specified number of months ago.
		 * @months Integer number of months
		 */
		monthsAgoStart(months: Number): String;

		/**
		 * Queries an object and returns true if the object is null, undefined, or contains an empty string.
		 * @o The object to be checked.
		 */
		nil(o: Object): Boolean;

		/**
		 * Returns the date and time for the last day of the quarter for a specified number of quarters ago.
		 * @quarters Integer number of quarters
		 */
		quartersAgoEnd(quarters: Number): String;

		/**
		 * Returns the date and time for the first day of the quarter for a specified number of quarters ago.
		 * @quarters Integer number of quarters
		 */
		quartersAgoStart(quarters: Number): String;

		/**
		 * Sets the specified key to the specified value if the property is within the script's scope.
		 * @key The key for the property to be set.
		 * @value The value of the property to be set.
		 * @description A description of the property.
		 */
		setProperty(key: String, value: String, description: String): void;

		/**
		 * Sets the redirect URI for this transaction, which then determines the next page the user will see.
		 * @o URI object or URI string to set as the redirect
		 */
		setRedirect(o: Object): void;

		/**
		 * Determines if a database table exists.
		 * @name Name of the table to check for existence.
		 */
		tableExists(name: String): Boolean;

		/**
		 * Replaces UTF-8 encoded characters with ASCII characters.
		 * @url A string with UTF-8 percent (%) encoded characters.
		 */
		urlDecode(url: String): String;

		/**
		 * Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.
		 * @url The string to be encoded.
		 */
		urlEncode(url: String): String;

		/**
		 * Writes a warning message to the system log.
		 * @message The log message with place holders for any variable arguments.
		 * @param1 (Optional) First variable argument.
		 * @param2 (Optional) Second variable argument.
		 * @param3 (Optional) Third variable argument.
		 * @param4 (Optional) Fourth variable argument.
		 * @param5 (Optional) Fifth variable argument.
		 */
		warn(message: String, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object): void;

		/**
		 * Takes an XML string and returns a JSON object.
		 * @xmlString The XML string to be converted.
		 */
		xmlToJSON(xmlString: String): Object;

		/**
		 * Returns a date and time for a certain number of years ago.
		 * @years An integer number of years
		 */
		yearsAgo(years: Number): String;

		/**
		 * Returns yesterday's time (24 hours ago).
		 */
		yesterday(): String;

	}
	/**
	 * The Scoped GlideTableHierarchy API provides methods for handling information about table relationships.
    * 
	 */
	declare class GlideTableHierarchy {
		/**
		 * Instantiates a GlideTableHierarchy object.
		 * @tableName The name of the table.
		 */
		constructor(tableName: String);

		/**
		 * Returns an array of strings containing all tables that extend the current table and includes the current table.
		 */
		getAllExtensions(): Array;

		/**
		 * Returns the parent class.
		 */
		getBase(): String;

		/**
		 * Returns an array of strings containing all classes in the hierarchy of the current table.
		 */
		getHierarchy(): Array;

		/**
		 * Returns the table's name.
		 */
		getName(): String;

		/**
		 * Returns the top level class in the hierarchy.
		 */
		getRoot(): String;

		/**
		 * Returns an array of strings containing all tables that extend the current table.
		 */
		getTableExtensions(): Array;

		/**
		 * Returns an array of strings of the table names in the hierarchy.
		 */
		getTables(): Array;

		/**
		 * Returns true of this class has been extended.
		 */
		hasExtensions(): Boolean;

		/**
		 * Returns true if this is a base class.
		 */
		isBaseClass(): Boolean;

		/**
		 * Returns true if this table is not in a hierarchy.
		 */
		isSoloClass(): Boolean;

	}
	/**
	 * Provides the ability to read single lines from an input stream. Because an input stream is used, it is not subject to the 5MB attachment size limit.
    * 
	 */
	declare class GlideTextReader {
		/**
		 * Creates a scoped GlideTextReader object for the specified input stream.
		 * @inputStream The input stream to be read.
		 */
		constructor(inputStream: GlideScriptableInputStream);

		/**
		 * Returns the character encoding of the input stream.
		 */
		getEncoding(): String;

		/**
		 * Returns a single line from the input stream and returns a string. Since this is working off of a stream, it is not subject to the 5MB size limit.
		 */
		readLine(): String;

	}
	/**
	 * The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields.
    * 
	 */
	declare class GlideTime {
		/**
		 * Instantiates a GlideTime object with the current time.
		 */
		constructor();

		/**
		 * Instantiates a GlideTime object with the specified time.
		 * @milliseconds The datetime in milliseconds.
		 */
		constructor(milliseconds: Number);

		/**
		 * Gets the time in the specified format.
		 * @format The time format.
		 */
		getByFormat(format: String): String;

		/**
		 * Gets the time in the current user's display format and time zone.
		 */
		getDisplayValue(): String;

		/**
		 * Gets the display value in the current user's time zone and the internal format (HH:mm:ss).
		 */
		getDisplayValueInternal(): String;

		/**
		 * Returns the hours part of the time using the local time zone.
		 */
		getHourLocalTime(): Number;

		/**
		 * Returns the hours part of the time using the local time zone. The number of hours is based on a 24 hour clock.
		 */
		getHourOfDayLocalTime(): Number;

		/**
		 * Returns the hours part of the time using the UTC time zone. The number of hours is based on a 24 hour clock.
		 */
		getHourOfDayUTC(): Number;

		/**
		 * Returns the hours part of the time using the UTC time zone. The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
		 */
		getHourUTC(): Number;

		/**
		 * Returns the number of minutes using the local time zone.
		 */
		getMinutesLocalTime(): Number;

		/**
		 * Returns the number of minutes in the hour based on the UTC time zone.
		 */
		getMinutesUTC(): Number;

		/**
		 * Returns the number of seconds in the current minute.
		 */
		getSeconds(): Number;

		/**
		 * Gets the time value stored in the database by the GlideTime object in the internal format, HH:mm:ss, and the system time zone.
		 */
		getValue(): String;

		/**
		 * Sets a time value using the current user's display format and time zone.
		 * @asDisplayed The time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as HH:mm:ss.
		 */
		setDisplayValue(asDisplayed: String): void;

		/**
		 * Sets the time of the GlideTime object in the internal time zone.
		 * @o The time in hh:mm:ss format.
		 */
		setValue(o: String): void;

		/**
		 * Gets the duration difference between two GlideTime object values.
		 * @startTime The start value.
		 * @endTime The end value.
		 */
		subtract(startTime: GlideTime, endTime: GlideTime): GlideDuration;

	}
	/**
	 * The scoped GlideUICompatibility class provides the ability for scoped applications to define their own minimum browser versions. This is done by creating system properties for the scoped application.
    * You create the properties using the sys_properties list and assign a version number. When you do this from the scoped application, the prefix is automatically added to the property name. The scoped application UI compatibility properties are: .ui.ie_minimum .ui.chrome_minimum .ui.firefox_minimum .ui.safari_major_version_minimum You can then use the scoped GlideUICompatibility class to determine if the current browser is supported.
	 */
	declare class GlideUICompatibility {
		/**
		 * Creates a GlideUICompatibility object.
		 * @scopeName The application's scope name
		 */
		constructor(scopeName: String);

		/**
		 * Returns the terms "block" or "allow" based upon the browser version.
		 */
		getCompatibility(): String;

		/**
		 * Determines if the browser is not supported.
		 */
		isBlocked(): Boolean;

	}
	/**
	 * The GlideURI class is a utility class for handling the URI parameter. The GlideURI class is available in scoped and global scripts.
    * 
	 */
	declare class GlideURI {
		/**
		 * Instantiates a GlideURI object.
		 */
		constructor();

		/**
		 * Returns the specified parameter.
		 * @name The parameter name.
		 */
		get(name: String): String;

		/**
		 * Returns the file name portion of the URI.
		 */
		getFileFromPath(): String;

		/**
		 * Sets the specified parameter to the specified value.
		 * @name The parameter name.
		 * @value The value.
		 */
		set(name: String, value: String): void;

		/**
		 * Reconstructs the URI string and performs the proper URL encoding by converting non-valid characters to their URL code. For example, converting & to '%26'.
		 * @path The base portion of the system URL to which the URI is appended.
		 */
		toString(path: String): String;

	}
	/**
	 * The scoped GlideUser API provides access to information about the current user and current user roles. Using the scoped GlideUser API avoids the need to use the slower GlideRecord queries to get user information.
    * 
	 */
	declare class GlideUser {
		/**
		 * Returns the current user's first name.
		 * @firstName Current user's first name.
		 */
		firstName;
		/**
		 * The current user's last name.
		 * @lastName Current user's last name.
		 */
		lastName;
		/**
		 * Returns the sys_id of the current user.
		 * @userID sys_id of the current user.
		 */
		userID;
		/**
		 * This property is the current user's username, for example gsmith02. It is not the user's name, for example George Smith.
		 * @userName Current user's username.
		 */
		userName;
		/**
		 * Returns a session client value previously set with putClientData().
		 * @Key Name of the client data to retrieve.
		 */
		getClientData(Key: String): String;

		/**
		 * Returns the first and last name of the current user.
		 */
		getFullName(): String;

		/**
		 * Returns true if the current user has the specified role or the admin role.
		 * @role Role to check
		 * @includeDefaults (Optional) Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request. For additional information on roles, see Explicit roles. Default: false
		 */
		hasRole(role: String, includeDefaults: Boolean): Boolean;

		/**
		 * Returns true only if the current user has the specified role.
		 * @role Role to check
		 * @includeDefaults (Optional) Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request. For additional information on roles, see Explicit roles. Default: false
		 */
		hasRoleExactly(role: String, includeDefaults: Boolean): Boolean;

		/**
		 * Returns true if the current user has at least one of the specified roles or has the admin role.
		 * @roles Comma-separated list of roles to check
		 * @includeDefaults (Optional) Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request. For additional information on roles, see Explicit roles. Default: false
		 */
		hasRoleFromList(roles: String, includeDefaults: Boolean): Boolean;

		/**
		 * Returns true if the current user has any role.
		 * @includeDefaults (Optional) Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request. For additional information on roles, see Explicit roles. Default: false
		 */
		hasRoles(includeDefaults: Boolean): Boolean;
		/**
		 * Server side only: Returns the current user's company sys_id.
		 */
		getCompanyID(): String;

		/**
		 * Server side only: Returns the current user's display name.
		 */
		getDisplayName(): String;

		/**
		 * Server side only: Returns the identifier of the user's current session domain.
		 */
		getDomainID(): String;

		/**
		 * Server side only: Returns the user's email address.
		 */
		getEmail(): String;

		/**
		 * Server side only: Returns the user's first name.
		 */
		getFirstName(): String;

		/**
		 * Server side only: Gets the sys_id of the current user.
		 */
		getID(): String;

		/**
		 * Server side only: Returns the user's last name.
		 */
		getLastName(): String;

		/**
		 * Server side only: Returns the user ID, or login name, of the current user.
		 */
		getName(): String;

		/**
		 * Server side only: Gets the specified user preference value for the current user.
		 * @name The name of the preference.
		 */
		getPreference(name: String): String;

		/**
		 * Server side only: Returns a list of roles that includes explicitly granted roles, inherited roles, and roles acquired by group membership.
		 */
		getRoles(): Array;

		/**
		 * Server side only: Returns the list of roles explicitly granted to the user.
		 */
		getUserRoles(): Array;

		/**
		 * Server side only: Determines if the current user has the specified role.
		 * @role Role to check
		 */
		hasRole(role: String): Boolean;

		/**
		 * Server side only: Determines if the current user is a member of the specified group.
		 * @group Group to check
		 */
		isMemberOf(group: String): Boolean;

		/**
		 * Server side only: Saves a user preference value to the database.
		 * @name The preference to save.
		 * @value The preference value.
		 */
		savePreference(name: String, value: String): void;

	}
	/**
	 * Provides methods to remove invalid characters from an XML string, and to validate an XML string.
    * Access these methods using the static object GlideXMLUtil. This class is available in scoped and global scripts.
	 */
	declare class GlideXMLUtil {
		/**
		 * Removes invalid characters from an XML string.
		 * @xmlString The string to be processed.
		 */
		removeInvalidChars(xmlString: String): String;

		/**
		 * Determines if the specified string is valid XML.
		 * @xmlString The string to be validated.
		 * @nsAware When true, the validation is aware of name spaces. When false, the validation ignores name spaces.
		 * @forgiveUnclosed When true, the validation does not check for tags enclosing the string.
		 */
		validateXML(xmlString: String, nsAware: Boolean, forgiveUnclosed: Boolean): String;

	}
	/**
	 * Provides scoped methods to create JSON objects from a string, and to turn JSON objects into strings.
    * For scoped applications, the JSON API uses static methods that call the JavaScript ES5 native JSON object.
	 */
	declare class JSONScoped {
		/**
		 * Creates an object or primitive type from a JSON formatted string.
		 * @str A JSON formatted string.
		 */
		parse(str: String): Object;

		/**
		 * Creates a string from a JSON object.
		 * @jsonObject The JSON object to be turned into a string.
		 */
		stringify(jsonObject: Object): String;

	}
	/**
	 * The PAScorecard API enables you to fetch data about indicators and their associated records, such as breakdowns.
    * 
	 */
	declare class PAScorecard {
		/**
		 * Add a query parameter to filter the returned scores.
		 * @uuid Enter a colon-separated list of sys_id values to specify which indicators, breakdowns, aggregates, and domains to query. The parameter follows this format: : : : : : : The parameter must begin with the sys_id of an indicator record. Optionally, you can append the sys_id values of a breakdown and breakdown element to group the response based on the breakdown, and the sys_id of an aggregate to apply that aggregate. You can use a breakdown with an aggregate, or use only one. For information about obtaining the sys_id values of records, see Unique record identifier (sys_id). Note: If an indicator is configured to use a Default time series, all Analytics Hub s for that indicator use the selected aggregate.
		 * @breakdown Enter the sys_id of a breakdown to return chart information organized as defined by the breakdown. For example, enter the sys_id of a priority breakdown to return separate task chart information for each priority value, such as Number of open incidents / Priority / 2 - High.
		 * @breakdown_relation Specify the sys_id of a breakdown relation to break down the returned data using that relation. You can view available breakdown relations by setting the include_available_breakdowns parameter to true.
		 * @elements_filter Specify the sys_id of an elements filter to apply that filter to the returned data.
		 * @display Set to true to return only indicators that are displayed on the Analytics Hub. Set this parameter to all to return all indicators. This parameter is true by default.
		 * @favorites Set to true to return only indicators that are favorites of the querying user.
		 * @key Set to true to return results only for key indicators.
		 * @target Set to true to return results only for indicators that have a target set on the Analytics Hub.
		 * @contains Enter a comma-separated list of names or descriptions to return results only from indicators with a matching value.
		 * @tags Enter an indicator group sys_id to return the indicators in that group. Do not use uuid with this parameter.
		 * @per_page Enter the maximum number of indicators each query can return on a page. By default this value is 10, and the maximum is 100.
		 * @page Specify the page number. For example, when querying 20 Analytics Hub s with the default per_page value (10), specify a page value of 2 to retrieve Analytics Hub s 11-20.
		 * @sortby Specify the value to use when sorting results. Valid values for this parameter are value, change, changeperc, gap, gapperc, duedate, name, order, default, group, indicator_group, frequency, target, date, trend, bullet, and direction. By default, queries sort records by value.
		 * @sortdir Specify the sort direction, ascending or descending. By default, queries sort records in descending order. Set this parameter to asc to sort in ascending order.
		 * @display_value Data retrieval operation for reference and choice fields. Based on this value, the display value and/or the actual value in the database are retrieved. true returns display values for all of the fields. false returns actual values from the database. If a value is not specified, this parameter defaults to false. all returns both actual and display values.
		 * @exclude_reference_link Set to true to hide additional information provided for reference fields, such as the URI to the reference resource.
		 * @include_scores Set to true to return indicator scores for the entire time range selected on the Analytics Hub. If a value is not specified, this parameter defaults to false and returns only the most recent score value. To constrain the date range of the scores that are returned, combine this parameter with the from and to parameters.
		 * @from Specify the earliest date to return scores from. Only scores from this date or later are returned. The date format must match the ISO-8601 standard. This parameter requires that include_scores is set to true.
		 * @to Specify the latest date to return scores from. Only scores from this date or earlier are returned. The date format must match the ISO-8601 standard. This parameter requires that include_scores is set to true.
		 * @step Specify a numeric value to skip scores, based on the indicator frequency. For example, specify a value of 3 to return only scores from every third day for a daily indicator, or from every third week for a weekly indicator.
		 * @limit Specify the maximum number of scores to return.
		 * @include_available_breakdowns Set to true to return all available breakdowns for an indicator. If a value is not specified, this parameter defaults to false and returns no breakdowns.
		 * @include_available_aggregates Set to true to return all possible aggregates for an indicator, including aggregates that have already been applied. If a value is not specified, this parameter defaults to false and returns no aggregates.
		 * @include_realtime Set this parameter to true to return the realtime_enabled element which indicates if real-time scores are enabled for the indicator, and the realtime_value element which contains the real-time score value. This parameter is not supported for formula indicators.
		 * @include_target_color_scheme Set this parameter to true to return the target_color_scheme element that contains the minimum and maximum values, and the color of each section of the target color scheme for the Analytics Hub.
		 * @include_forecast_scores Set this parameter to true to return the forecast_scores element that contains an array of date-value pairs that define the forecast data for the Analytics Hub. This paramater requires that the include_scores parameter is also set to true.
		 * @include_trendline_scores Set this parameter to true to return the trendline_scores element that contains an array of date-value pairs that define the Analytics Hub trendline. This paramater requires that the include_scores parameter is also set to true.
		 */
		addParam(uuid: String, breakdown: String, breakdown_relation: String, elements_filter: String, display: String, favorites: String, key: String, target: String, contains: String, tags: String, per_page: String, page: String, sortby: String, sortdir: String, display_value: String, exclude_reference_link: String, include_scores: String, from: String, to: String, step: String, limit: String, include_available_breakdowns: String, include_available_aggregates: String, include_realtime: String, include_target_color_scheme: String, include_forecast_scores: String, include_trendline_scores: String): void;

		/**
		 * Perform a query based on the specified parameters and return the results as an object.
		 */
		query(): Object;

		/**
		 * Get the last query result as an object.
		 */
		result(): Object;

	}
	/**
	 * The PASnapshot API enables you to query information about Performance Analytics snapshots. Snapshots are the lists of records (sys_ids) that are collected at the time that the scores for those records are collected. A snapshot is made only for indicators with Collect records selected.
    * You can query information about a snapshot at a certain date using the indicator sys_id and date, and perform comparisons between snapshots for an indicator at different dates.
	 */
	declare class PASnapshot {
		/**
		 * Compare records in snapshots for a specified indicator at multiple dates, such as to identify records included in one snapshot but not the other.
		 * @sys_id The indicator sys_id.
		 * @date1 The date of the first snapshot, in the format yyyymmdd.
		 * @date2 The date of the second snapshot, in the format yyyymmdd.
		 * @type Specifies what data to retrieve. Valid values are: all1: all records in the first snapshot all2: all records in the second snapshot shared: records that are in both snapshots movedin: records that are in the second snapshot, but not the first movedout: records that are in the first snapshot, but not the second
		 */
		getCompareIDs(sys_id: String, date1: Number, date2: Number, type: String): String;

		/**
		 * Get the query used to compare records in snapshots for a specified indicator at multiple dates.
		 * @sys_id The indicator sys_id.
		 * @date1 The date of the first snapshot, in the format yyyymmdd.
		 * @date2 The date of the second snapshot, in the format yyyymmdd.
		 * @type Specifies what data to retrieve. Valid values are: all1: all records in the first snapshot all2: all records in the second snapshot shared: records that are in both snapshots movedin: records that are in the second snapshot, but not the first movedout: records that are in the first snapshot, but not the second
		 */
		getCompareQuery(sys_id: String, date1: Number, date2: Number, type: String): String;

		/**
		 * Get the sys_id values for all records contained in the snapshot for a specified indicator at the specified date.
		 * @sys_id The indicator sys_id.
		 * @date The date when the snapshot was taken, in the format yyyymmdd.
		 */
		getIDs(sys_id: String, date: Number): String;

		/**
		 * Get the query used to generate the snapshot for a specified indicator at the specified date.
		 * @sys_id The indicator sys_id.
		 * @date The date when the snapshot was taken, in the format yyyymmdd.
		 */
		getQuery(sys_id: String, date: Number): String;

	}
	/**
	 * The RenderProperties API provides methods about the current page and is available in Jelly scripts and in UI-action conditions and scripts.
    * Access RenderProperties methods using the static variable RP.
	 */
	declare class RenderProperties {
		/**
		 * Returns the encoded query from the URL sent to the page.
		 */
		getEncodedQuery(): String;

		/**
		 * Returns the list control object for the page.
		 */
		getListControl(): ScopedSysListControlobject;

		/**
		 * Returns the value of the specified URL parameter.
		 * @parameterName Name of the parameter passed on the URL.
		 */
		getParameterValue(parameterName: String): String;

		/**
		 * Returns the URL where the request originated.
		 */
		getReferringURL(): String;

		/**
		 * Returns the name of the view in use.
		 */
		getViewName(): String;

		/**
		 * Returns the window's properties.
		 */
		getWindowProperties(): Object;

		/**
		 * Returns true if the page is part of Studio.
		 */
		isInDevStudio(): Boolean;

		/**
		 * Returns true if this is an interactive session. An interactive session is when a user has logged in as opposed to a REST request.
		 */
		isInteractive(): Boolean;

		/**
		 * Returns true when the sysparm_collection_related_file URL parameter is set.
		 */
		isManyToMany(): Boolean;

		/**
		 * Returns true when the sys_is_related_list URL-parameter is true. Returns false if the parameter is not present.
		 */
		isRelatedList(): Boolean;

	}
	/**
	 * Defines facet items, filters, or mapped queries for a facets object.
    * The SPScriptedFacet API can only be used in a facet generation script in a Service Portal search source. The facet generation script is only visible when Is scripted source is selected. There is no constructor for this class. Instead, use the createFacet() or createMultiChoiceFacet() methods of the SPScriptedFacetService class to generate a facets object.
	 */
	declare class SPScriptedFacet {
		/**
		 * Adds facet items or mapped queries to a facets object.
		 * @label The display label for the facet item or mapped query.
		 * @valueObj The facet item or mapped query for the facet. Can only contain types String, Number, Boolean, and Double.
		 */
		addFacetItem(label: String, valueObj: Object): void;

	}
	/**
	 * Generates a multi choice or single choice facets object for an advanced search source.
    * The SPScriptedFacetService API can only be used in a facet generation script in a Service Portal search source. The facet generation script is only visible when Is scripted source is selected. There is no constructor for this class. Instead, use the createFacet() or createMultiChoiceFacet() methods to generate a facets object.
	 */
	declare class SPScriptedFacetService {
		/**
		 * Creates a single choice facets object.
		 * @label Label for the facet.
		 * @id ID for the facet.
		 */
		createFacet(label: String, id: String): Object;

		/**
		 * Creates a multi choice facets object.
		 * @label Label for the facet.
		 * @id ID for the facet.
		 */
		createMultiChoiceFacet(label: String, id: String): Object;

	}
	/**
	 * Scoped TemplatePrinter handles printing from a mail script to the email message.
    * There is no constructor for the scoped TemplatePrinter API. The methods are called in mail scripts using the template global variable.
	 */
	declare class TemplatePrinter {
		/**
		 * Prints the string to the email body.
		 * @string The string to print
		 */
		print(string: String): void;

		/**
		 * Adds non-breaking spaces to the email body.
		 * @spaces The number of non-breaking spaces to output to the email body.
		 */
		space(spaces: Number): void;

	}
	/**
	 * The scoped Workflow API provides methods that can be used in an activity definition script.
    * There are no constructors for creating an instance of a scoped workflow object. Instead, use the global workflow object available in activity scripts. This workflow object is available in any script location inside a workflow.
	 */
	declare class Workflow {
		/**
		 * Returns the workflow variables.
		 * @inputs Workflow variables as name value pairs.
		 */
		inputs;
		/**
		 * Returns the workflow's result.
		 * @result Workflow's results
		 */
		result;
		/**
		 * Adds a debug message to the log.
		 * @message The message to add to the log.
		 * @args Arguments to add to the message.
		 */
		debug(message: String, args: Object): String;

		/**
		 * Adds an error message to the log.
		 * @message The message to add to the log.
		 * @args Arguments to add to the message.
		 */
		error(message: String, args: Object): String;

		/**
		 * Returns the specified variable's value.
		 * @name The variable name
		 */
		getVariable(name: String): Object;

		/**
		 * Adds an informational message to the log.
		 * @message The message to add to the log.
		 * @args Arguments to add to the message.
		 */
		info(message: String, args: Object): String;

		/**
		 * Returns the workflow name.
		 */
		name(): String;

		/**
		 * Removes the specified variable from the workflow.
		 * @name The variable name
		 */
		removeVariable(name: String): void;

		/**
		 * Returns the workflow's scratchpad object.
		 */
		scratchpad(): Object;

		/**
		 * Sets the workflow's result.
		 * @result The workflow's result
		 */
		setResult(result: String): void;

		/**
		 * Sets the specified variable to the specified value.
		 * @name The variable name
		 * @value The value to be assigned to the variable.
		 */
		setVariable(name: String, value: Object): void;

		/**
		 * Adds a warning message to the log.
		 * @message The message to add to the log.
		 * @args Arguments to add to the message.
		 */
		warn(message: String, args: Object): String;

	}
	/**
	 * XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string.
    * Use this JavaScript class to create an object from an XML string, usually a return value from a web-service invocation, or the XML payload of ECC Queue. Using the XMLDocument2 object in a JavaScript business rule lets you query values from the XML elements and attributes directly. An XML string has a tree structure, and the parts of the structure are called nodes. An XMLDocument2 object deals with two node types, element, and document element. An element node is a node with a name and possibly attributes and child nodes. A document-element node is the root node of the XML tree. It is the only node without a parent node.
	 */
	declare class XMLDocument2 {
		/**
		 * Creates an XMLDocument2 object from an attachment stream.
		 * @inputStream The input stream the XMLDocument2 object encapsulates.
		 */
		constructor(inputStream: GlideScriptableInputStream);

		/**
		 * Creates an XMLDocument2 object.
		 */
		constructor();

		/**
		 * Creates and adds an element node to the current node. The element name is the string passed in as a parameter. The new element has no text child nodes.
		 * @name The new element's name.
		 */
		createElement(name: String): XMLNode;

		/**
		 * Creates and adds an element node with a text child node to the current node.
		 * @name Name of the element to add.
		 * @value Element's text value.
		 */
		createElementWithTextValue(name: String, value: String): XMLNode;

		/**
		 * Gets the document element node of the XMLdocument2 object. The document element node is the root node.
		 */
		getDocumentElement(): XMLNode;

		/**
		 * Gets the first node in the specified XPATH.
		 * @xPath The XPATH.
		 */
		getFirstNode(xPath: String): XMLNode;

		/**
		 * Gets the node after the specified node.
		 * @current The current node.
		 */
		getNextNode(current: Object): XMLNode;

		/**
		 * Gets the node specified in the xpath.
		 * @xPath XPath of the node to obtain.
		 */
		getNode(xPath: String): XMLNode;

		/**
		 * Gets all the text child nodes from the node referenced in the specified XPath.
		 * @xPath XPath of the text to obtain.
		 */
		getNodeText(xPath: String): String;

		/**
		 * Parses the XML string and loads it into the XMLDocument2 object.
		 * @xmlDoc The document to parse.
		 */
		parseXML(xmlDoc: String): Boolean;

		/**
		 * Makes the node passed in as a parameter the current node.
		 * @element The element node to set as the current node.
		 */
		setCurrentElement(element: XMLNode): void;

		/**
		 * When set to true, the XMLDocument2 object processes the document with XML namespaces.
		 * @aware When true, the XMLDocument2 object processes the document with XML namespaces.
		 */
		setNamespaceAware(aware: Boolean): void;

		/**
		 * Returns a string containing the XML.
		 */
		toString(): String;

	}
	/**
	 * The scoped XMLNode API allows you to query values from XML nodes. XMLNodes are extracted from XMLDocument2 objects, which contain XML strings.
    * There are no constructors for creating a stand alone instance of an XMLNode object. Instead, use the createElement() method of XMLDocument2, which adds a node to an existing document.
	 */
	declare class XMLNode {
		/**
		 * Gets the value of the attribute.
		 * @attribute Name of the attribute.
		 */
		getAttribute(attribute: String): String;

		/**
		 * Returns an object containing the node's attributes as properties with values.
		 */
		getAttributes(): Object;

		/**
		 * Gets a XMLNodeIterator object that can be used to walk through the list of child nodes.
		 */
		getChildNodeIterator(): XMLNodeIterator;

		/**
		 * Gets the node's first child node.
		 */
		getFirstChild(): XMLNode;

		/**
		 * Gets the node's last child node.
		 */
		getLastChild(): XMLNode;

		/**
		 * Gets the node's name. A node's name is determined by the node type. A document-element node's name is #document. A text node's name is #text. An element node's name is the element's name.
		 */
		getNodeName(): String;

		/**
		 * Gets the node's value. A node's value is determined by the node type. Element and document-element nodes return null.
		 */
		getNodeValue(): String;

		/**
		 * Gets the text content of the current node. The text content of a node consists of all the node's child text nodes
		 */
		getTextContent(): String;

		/**
		 * Determines if the node has the specified attribute.
		 * @attribute The name of the attribute to check.
		 */
		hasAttribute(attribute: String): Boolean;

		/**
		 * Returns the string value of the current node.
		 */
		toString(): String;

	}
	/**
	 * The scoped XMLNodeIterator class allows you to iterate through a node of a XML document.
    * There are no constructors for creating a stand alone instance of a XMLNodeIterator object. To create a XMLNodeIterator object use the getChildNodeIterator() method of the XMLNode object.
	 */
	declare class XMLNodeIterator {
		/**
		 * Returns true if the iteration has more elements.
		 */
		hasNext(): Boolean;

		/**
		 * Gets the next element in the iteration. The returned element may be a #text node for the spaces/tabs if XML is "pretty formatted".
		 */
		next(): XMLNode;

	}
declare namespace sn_auth {
	/**
	 * Use these methods for requesting and revoking OAuth refresh and access tokens.
    * This API can be used in global and scoped scripts. In scoped scripts us the sn_auth namespace identifier.
	 */
	declare class GlideOAuthClient {
		/**
		 * Retrieves the token for the client. You can use the token to check the expiration date and perform a token renewal.
		 * @OAuthEntityName The OAuth entity.
		 * @requestor The request.
		 */
		getToken(OAuthEntityName: String, requestor: String): ScopedGlideOAuthToken;

		/**
		 * Retrieves the token for the client, with the request parameters encoded in JSON format.
		 * @clientName The client name.
		 * @jsonString The JSON string for the client.
		 */
		requestToken(clientName: String, jsonString: String): GlideOAuthClientResponse;

		/**
		 * Retrieves the token for the client, with the client name and the request set into a GlideOAuthClientResponse object.
		 * @clientName The client name.
		 * @request The request.
		 */
		requestTokenByRequest(clientName: String, request: GlideOAuthClientRequest): GlideOAuthClientResponse;

		/**
		 * Revokes the access or refresh token for the client, with the request and optional header parameters set into a GlideOAuthClientRequest object.
		 * @clientName The client name.
		 * @accessToken The access token.
		 * @refreshToken The refresh token.
		 * @request The request.
		 */
		revokeToken(clientName: String, accessToken: String, refreshToken: String, request: GlideOAuthClientRequest): GlideOAuthClientResponse;

	}
	/**
	 * Use these methods for handling OAuth client requests.
    * This API can be used in global and scoped scripts. In scoped scripts us the sn_auth namespace identifier.
	 */
	declare class GlideOAuthClientRequest {
		/**
		 * Retrieves the grant type.
		 */
		getGrantType(): String;

		/**
		 * Retrieves the HTTP headers for the string you provide.
		 * @name The name of the parameter.
		 */
		getHeader(name: String): StringMap;

		/**
		 * Retrieves the HTTP headers.
		 */
		getHeaders(): StringMap;

		/**
		 * Retrieves the parameters for the parameter name you provide.
		 * @name The parameter name for which you want the parameters.
		 */
		getParameter(name: String): String;

		/**
		 * Retrieves the password.
		 */
		getPassword(): String;

		/**
		 * Retrieves the refresh token.
		 */
		getRefreshToken(): String;

		/**
		 * Retrieves the scope.
		 */
		getScope(): String;

		/**
		 * Retrieves the user name.
		 */
		getUserName(): String;

		/**
		 * Sets the grant type for the string you provide.
		 * @name The grant type.
		 */
		setGrantType(name: String): void;

		/**
		 * Retrieves the HTTP headers for the string you provide.
		 * @name The name of the parameter.
		 * @value The value of the parameter.
		 */
		setHead(name: String, value: String): void;

		/**
		 * Sets the parameters for the name:value pair of strings you provide.
		 * @name The parameter name for which you want the parameters.
		 * @value The value of the parameter.
		 */
		setParameter(name: String, value: String): void;

		/**
		 * Sets the password with the string you provide.
		 * @password The user name.
		 */
		setPassword(password: String): void;

		/**
		 * Sets the refresh token with the string you provide.
		 * @refreshToken The refresh token.
		 */
		setRefreshToken(refreshToken: String): void;

		/**
		 * Sets the scope for the string you provide.
		 * @scope The scope.
		 */
		setScope(scope: String): void;

		/**
		 * Sets the user name with the string you provide.
		 * @userName The user name.
		 */
		setUserName(userName: String): void;

	}
	/**
	 * Use these methods for handling OAuth client responses.
    * This API can be used in global and scoped scripts. In scoped scripts us the sn_auth namespace identifier.
	 */
	declare class GlideOAuthClientResponse {
		/**
		 * Retrieves all of the response information, including instance information.
		 */
		getBody(): String;

		/**
		 * Retrieves the HTTP response content header from an external OAuth provider.
		 */
		getContentType(): String;

		/**
		 * Retrieves the error message if authentication is not successful.
		 */
		getErrorMessage(): String;

		/**
		 * Retrieves the HTTP response code from the external OAuth provider.
		 */
		getResponseCode(): String;

		/**
		 * Retrieves the error message if authentication is not successful.
		 */
		getResponseParameters(): MapString;

		/**
		 * Retrieves the refresh token.
		 */
		getToken(): GlideOAuthToken;

	}
	/**
	 * Use the GlideOAuthToken methods for retrieving OAuth access token and information about the access token.
    * This API can be used in global and scoped scripts. In scoped scripts use the sn_auth namespace identifier.
	 */
	declare class GlideOAuthToken {
		/**
		 * Retrieves the access token.
		 */
		getAccessToken(): String;

		/**
		 * Retrieves the sys_id of the token ID.
		 */
		getAccessTokenSysID(): String;

		/**
		 * Retrieves the lifespan of the access token in seconds.
		 */
		getExpiresIn(): Number;

		/**
		 * Retrieves the lifespan of the access token in seconds.
		 */
		getRefreshToken(): Number;

		/**
		 * Retrieves the sys_id of the refresh token.
		 */
		getRefreshTokenSysID(): Number;

		/**
		 * Retrieves the scope, which is the amount of access granted by the access token.
		 */
		getScope(): String;

	}
}
declare namespace sn_cc {
	/**
	 * Use ConnectionInfo API to get connection attribute information through the connection and credential alias.
    * You can use this API in scoped applications, or within the global scope. In scoped scripts, use the sn_cc namespace identifier. For more information on connections and credentials, see Credentials and connection information. This function retrieves connection attribute information identified by the given connection and credential alias.
	 */
	declare class ConnectionInfo {
		/**
		 * Returns the value of a connection info attribute with the specified name.
		 */
		getAttribute(): void;

		/**
		 * Returns the value of credential attributes for a specified connection.
		 */
		getCredentialAttribute(): void;

		/**
		 * Returns the connection attributes as a collection of key-value pairs.
		 */
		getDataMap(): void;

		/**
		 * Returns the extended attributes as a collection of key-value pairs.
		 */
		getExtendedAttributes(): void;

	}
	/**
	 * Use ConnectionInfoProvider API to select connection information through the connection alias.
    * You can use this API in scoped applications, or within the global scope. In scoped scripts, use the sn_cc namespace identifier. This function retrieves connection information identified by the given connection alias.
	 */
	declare class ConnectionInfoProvider {
		/**
		 * Use ConnectionInfoProvider() to select connection information through the connection alias.
		 */
		constructor();

		/**
		 * This function retrieves a ConnectionInfo object identified by the given aliasID in the current domain.
		 * @aliasID The sys_id of a connection alias.
		 */
		getConnectionInfo(aliasID: String): ConnectionInfo;

		/**
		 * This function retrieves a ConnectionInfo object identified by the given aliasID for a specific domain.
		 * @aliasID The sys_id of a connection alias.
		 * @domainID The sys_id of a domain or global.
		 */
		getConnectionInfoByDomain(aliasID: String, domainID: String): ConnectionInfo;

	}
	/**
	 * Use StandardCredentialsProvider API to retrieve credential information.
    * You can use this API in scoped applications, or within the global scope. In scoped scripts, use the sn_cc namespace identifier. This function retrieves credential information by sys ID and by given credential attributes. < credentials.length; i++) { var credential = credentials[i]; gs.info(credential.getAttribute("name")); } ' class='language-javascript monospaceing'>
	 */
	declare class StandardCredentialsProvider {
		/**
		 * Use StardardCredentialsProvider() to retrieve credential information.
		 */
		constructor();

		/**
		 * This function retrieves a credential object identified by the given sys ID.
		 * @sysID A string representing the sys ID of the credential record.
		 */
		getCredentialByID(sysID: String): StandardCredential;

		/**
		 * This function returns an array of all credentials that match the given types and tags.
		 * @types Types is an array of credential type names. For example, ["ssh", "windows"] Note: If types are null or empty, any match returns a credential. If types are specified, the credentials whose type matches one of the types returns.
		 * @handles Handles is a comma-separated list of handle names. For example, "ssh,jdbc"
		 */
		getCredentials(types: String, handles: String): StandardCredential;

	}
}
declare namespace sn_clotho {
	/**
	 * Provides methods to add data to the MetricBase database, to execute transforms on the MetricBase database, and to receive the results of the transforms.
    * The Client class can be used in scoped and global server scripts. When using the Client class, use the sn_clotho namespace identifier. This class is part of the MetricBase application.
	 */
	declare class Client {
		/**
		 * Create an instance of the client class to access the MetricBase database.
		 */
		constructor();

		/**
		 * Remove the data in the MetricBase database associated with the specified metric in the specified GlideRecord. Use this method for removing test data.
		 * @gr The records whose time series data for the specified metric is to be deleted.
		 * @metric The name of the metric.
		 */
		deleteSeries(gr: GlideRecord, metric: String): void;

		/**
		 * Save metric data to the MetricBase database.
		 * @metricData A DataBuilder object containing metric data.
		 */
		put(metricData: DataBuilder): void;

	}
	/**
	 * A Data object contains the results of transform performed by a sn_clotho.Client.transform() method.
    * Do not use a constructor to create an instance of this class, instead use the object returned by the sn_clotho.Client.transform() method. The Data class can be used in scoped and global server scripts. When using the Data class, use the sn_clotho namespace identifier. This class is part of the MetricBase application.
	 */
	declare class Data {
		/**
		 * Returns the end time for data in the Data object.
		 */
		getEnd(): GlideDateTime;

		/**
		 * Returns the label assigned by the sn_clotho.ClothoTransform.label() method.
		 */
		getLabel(): String;

		/**
		 * Returns the name of the metric of the data series. Returns null when the data object is associated with multiple data series.
		 */
		getMetricName(): String;

		/**
		 * Returns the time period in milliseconds.
		 */
		getPeriod(): Number;

		/**
		 * Returns the start time for data in the Data object.
		 */
		getStart(): GlideDateTime;

		/**
		 * Returns the subject of the data series. Returns null when the data object is associated with multiple data series.
		 */
		getSubject(): String;

		/**
		 * Returns the name of the table assigned in the DataSelector class constructor. Returns null when the data object is associated with multiple data series.
		 */
		getTableName(): String;

		/**
		 * Returns an array of values.
		 */
		getValues(): Array;

		/**
		 * Returns the number of values in the Data object.
		 */
		size(): Number;

	}
	/**
	 * Use the DataBuilder class to create a series of data points for a metric. Use the sn_clotho.Client.put() method to save the values.
    * The DataBuilder class can be used in scoped and global server scripts. When using the DataBuilder class, use the sn_clotho namespace identifier. This class is part of the MetricBase application.
	 */
	declare class DataBuilder {
		/**
		 * Add a series of data points to the DataBuilder object. Each data point is a time stamp and a value.
		 * @start The time stamp for the first data point. Subsequent time stamps are calculated using the retention policy collection period.
		 * @value An array of numbers.
		 */
		add(start: GlideDateTime, value: Array): DataBuilder;

		/**
		 * Add a data point to the DataBuilder object. Each data point is a time stamp and a value. This method does not save the data point in the metric. Use the sn_clotho.Client.put() method to save the values.
		 * @start The time stamp for the data point.
		 * @value The value of the data point.
		 */
		add(start: GlideDateTime, value: Number): DataBuilder;

		/**
		 * Creates an instance of the DataBuilder class.
		 * @glideRecord GlideRecord from which to obtain the domain.
		 * @subject The sys_id of the GlideRecord associated with this series.
		 * @metric The field name of the metric.
		 */
		constructor(glideRecord: Object, subject: String, metric: String);

	}
	/**
	 * Manipulate time-series data to prepare the data for evaluation and analysis.
    * The Transformer class can be used in scoped and global server scripts. When using the Transformer class, use the sn_clotho namespace identifier. The general use case is to determine the period to be evaluated, select the records from the table with the metric field, define the type of transform to run, and then execute the transform. This class is part of the MetricBase application.
	 */
	declare class Transformer {
		/**
		 * Create a Transformer object.
		 * @sourceRecords Contains the records for which metrics are to be evaluated. Can be one record or many.
		 */
		constructor(sourceRecords: GlideRecord);

		/**
		 * Run the transform.
		 * @start The beginning of the period to be evaluated.
		 * @end The end of the period to be evaluated.
		 */
		execute(start: GlideDateTime, end: GlideDateTime): TransformResult;

		/**
		 * Specify a field to be used to group the data.
		 * @field A field in the table to be used to group the transform results.
		 */
		groupBy(field: String): TransformPart;

		/**
		 * Specify the metric field to be used in the transform.
		 * @metricName Name of the metric field.
		 */
		metric(metricName: String): TransformPart;

	}
	/**
	 * Use the TransformPart class to specify details of the transform to be done.
    * The TransformPart class can be used in scoped and global server scripts. When using the TransformPart class, use the sn_clotho namespace identifier. There is no constructor for this class. TransformPart objects are returned by many Transformer and TransformPart methods. The methods of this class define the transforms to be done. The actual transformation is done when the execute() method is called on the Transformer object. The order the TransformPart methods are called is important. The metric() method must be called before calling a transform method. You cannot use the metric() or groupBy() methods after calling a transform method. Intermediate transforms are not returned in a result unless the collect() method is called for the intermediate result you want. This class is part of the MetricBase application.
	 */
	declare class TransformPart {
		/**
		 * Add the specified number to the value in each time stamp.
		 * @constant The number to add to the value in each time stamp.
		 */
		add(constant: Number): TransformPart;

		/**
		 * Aggregate the selected metric series into one series containing the average value for each time stamp.
		 */
		avg(): TransformPart;

		/**
		 * Create a result set that for each time stamp returns specified number of bottom values. This method results in 'count' number of series. Each value retains the label of its source series.
		 * @count The number of series to return. The series are labeled 0 to count - 1.
		 */
		bottom(count: Number): TransformPart;

		/**
		 * Replace the value in any time stamp that is greater than the specified value with the specified value.
		 * @ceiling The maximum allowed value for any time stamp.
		 */
		ceil(ceiling: Number): TransformPart;

		/**
		 * Mark this transform for collection.
		 */
		collect(): TransformPart;

		/**
		 * Aggregate the selected metric series into one series containing the number of values for each time stamp.
		 */
		count(): TransformPart;

		/**
		 * Divide the value in each time stamp by the specified number.
		 * @constant The number by which to divide the value of each time stamp.
		 */
		div(constant: Number): TransformPart;

		/**
		 * Create a series using the specified aggregator for the specified time.
		 * @aggregator Can be: AVG CHISQUARE LAST MAX MEDIAN MIN STDDEV For definitions of these options, see MetricBase transforms. .
		 * @duration The time period for doing
		 */
		filter(aggregator: Object, duration: Object): TransformPart;

		/**
		 * Replace the value in any time stamp that is less than the specified value with the specified value.
		 * @floor The minimum value for any time stamp.
		 */
		floor(floor: Number): TransformPart;

		/**
		 * Create series made up of the value that the specified percentage of values is below. Returns a series for each fraction in the specified array.
		 * @fractions The fractions to use on the input series.
		 */
		fractiles(fractions: Arrayofnumbers): TransformPart;

		/**
		 * Return the part of the result relevant to this transform.
		 */
		getResult(): TransformResult;

		/**
		 * Specify a field to be used to group the data.
		 * @field A field in the table to be used to group the transform results.
		 */
		groupBy(field: String): TransformPart;

		/**
		 * Create a data value for a NaN data item by interpolating from adjacent data values.
		 * @count Specifies the number of data samples in each direction to check for a non NaN value. If if a non NaN value is not found, NaN is used.
		 */
		interpolate(count: Object): TransformPart;

		/**
		 * Perform an Interquartile range transform.
		 */
		iqr(): TransformPart;

		/**
		 * Add a label for the resulting series.
		 * @label The label for the transform results.
		 */
		label(label: String): TransformPart;

		/**
		 * Returns at most the specified number of values, starting at the most recent non-NaN value.
		 * @count A number of time stamps.
		 */
		limit(count: Object): TransformPart;

		/**
		 * Run a logarithm on the value in each time stamp where the result is the log of the specified base for the time stamp value.
		 * @base The base for the logarithm calculation.
		 */
		log(base: Number): TransformPart;

		/**
		 * Returns a series with the maximum value for each time stamp.
		 */
		max(): TransformPart;

		/**
		 * Create a series containing the median of values for each time stamp across a set of series.
		 */
		median(): TransformPart;

		/**
		 * Specify the metric field to be used in the transform.
		 * @metric Name of the metric field.
		 */
		metric(metric: String): TransformPart;

		/**
		 * Returns a series with the minimum value for each time stamp.
		 */
		min(): TransformPart;

		/**
		 * Multiply the value in each time stamp by the specified number.
		 * @constant The number by which to multiply the value of each time stamp.
		 */
		mul(constant: Number): TransformPart;

		/**
		 * Partition the series into intervals of the same duration.
		 * @aggregator The aggregator to use. Can be min, max, avg, or last.
		 * @duration The interval length.
		 * @base The zero offset for partitioning. For example, if you partition by day (24h), then set the base to Monday at midnight in your time zone. If you partition by 30 days, then set the base to 1st day of the most recent month.
		 */
		partition(aggregator: String, duration: GlideDateTimeoranISO8601formattedstring, base: GlideDateTimeoranISO8601formattedstring): TransformPart;

		/**
		 * Specify the number of data points to include in the result.
		 * @count The number of samples to include in the result.
		 */
		resample(count: Number): TransformPart;

		/**
		 * Specify the minimum and maximum number of samples to include in the result.
		 * @min The minimum number of samples to include in the result. If not enough samples are available, interpolation is used to create samples.
		 * @max The maximum number of samples to include in the result.
		 */
		resample(min: Number, max: Number): TransformPart;

		/**
		 * Specify an aggregator to use to create a result set over the specified duration. The aggregator can be LAST, AVG, MIN, or MAX.
		 * @aggregator Can be LAST, AVG, MIN, or MAX.
		 * @duration The time period for the result set.
		 */
		resample(aggregator: String, duration: GlideDuration): TransformPart;

		/**
		 * Specify an aggregator to use to create a result set of the specified size. The aggregator can be LAST, AVG, MIN, or MAX.
		 * @aggregator Can be LAST, AVG, MIN, or MAX.
		 * @numValues The number of samples to include in the result set. When the number of values requested is greater than the number of values in the data for the requested time period, interpolate() is used to add values between existing points to reach the requested number of values.
		 */
		resample(aggregator: String, numValues: Number): TransformPart;

		/**
		 * Round the value in each time stamp to the specified precision.
		 * @precision The value to be used in the rounding calculation.
		 */
		round(precision: Number): TransformPart;

		/**
		 * Create a series containing the standard deviation of values for each time stamp across a set of series.
		 */
		stddev(): TransformPart;

		/**
		 * Subtract the specified number from the value in each time stamp.
		 * @constant The number to subtract from the value in each time stamp.
		 */
		sub(constant: Object): TransformPart;

		/**
		 * Aggregate the selected metric series into one series containing the sum of all values for each time stamp.
		 */
		sum(): TransformPart;

		/**
		 * Create a result set that for each time stamp returns the specified number of top values. This method results in 'count' number of series. Each value retains the label of its source series.
		 * @count The number of series to return. The series are labeled 0 to count - 1.
		 */
		top(count: Number): TransformPart;

	}
	/**
	 * Provides the result of a transformation run on time-series data.
    * The TransformResult class can be used in scoped and global server scripts. When using the Transformer class, use the sn_clotho namespace identifier. There is no constructor for this class. TransformResult objects are returned by many TransformPart methods. This class is part of the MetricBase application.
	 */
	declare class TransformResult {
		/**
		 * Returns an array of Data objects. Returns an error if no group was specified for the transform.
		 */
		byGroup(): Array;

		/**
		 * Returns the transformed data with the specified label.
		 * @label The label that identifies the data to be retrieved.
		 */
		getByLabel(label: String): Data;

		/**
		 * Returns a single Data object, or null if the result is empty.
		 */
		getData(): Data;

		/**
		 * Returns the transformed data as an array. This method turns a Data object into an array.
		 */
		toArray(): Array;

	}
}
declare namespace sn_cmdb {
	/**
	 * The IdentificationEngine uses the Identification and Reconciliation framework to minimize creation of duplicate CIs and to reconcile CI attributes by only accepting information from authorized data sources when updating the CMDB.
    * You must enable the Configuration Management for Scoped Apps (CMDB) [com.snc.cmdb.scoped] plugin in order to use this class. When using this class in a scoped application, use the sn_cmdb namespace identifier.
	 */
	declare class IdentificationEngine {
		/**
		 * Insert or update configuration items in the CMDB based on identification and reconciliation rules. Use this API instead of updating the CMDB directly.
		 * @source Identifies the data source of the CI information. These must be one of the choice values defined for the discovery_source field of the cmdb_ci table.
		 * @input A JSON formatted string of configuration items to be added or updated. Each input string is in the format 'items: [{}], relations:[{}], related[{}]', where each item within the items, relations, and related lists contains name-value pairs. The possible name-value pairs within the items list are: className - the sys_class_name of the CI to be created or updated. values:{} - the field information for the CI as name-value pairs, where the name is the field name. When updating reference fields, the value must be the referenced sys_id. lookup:[{}] - a list of records with each item having name-value pairs like the items list. related: [{}] - a list of records with each item having name-value pairs like the items list. The possible name-value pairs within the relations list are: parent - index of the parent item in the dependency relation child - index of the child item in the dependency relation type - the relationship type. This is one of the name field values from the cmdb_rel_type table.
		 */
		createOrUpdateCI(source: String, input: String): String;

		/**
		 * Determines the operation (insert/update) that will be performed with the specified payload without committing the operation in the database.
		 * @jsonString A JSON formatted string of configuration items to be added or updated. Each input string is in the format 'items: [{}], relations:[{}]', where each item within the items and relations lists contains name-value pairs. The possible name-value pairs within the items list are: className - the sys_class_name of the CI to be created or updated. values:{} - the field information for the CI as name-value pairs, where the name is the field name. lookup:[{}] - a list of records with each item having name-value pairs like the items list. The possible name-value pairs within the relations list are: parent - index of the parent item in the dependency relation child - index of the child item in the dependency relation type - the relationship type. This is one of the name field values from the cmdb_rel_type table.
		 */
		identifyCI(jsonString: String): String;

		/**
		 * Run an identification audit against the specified CI to detect duplicates.
		 * @gr The CI on which to run the audit to detect duplicates. The CI must have independent identification rules.
		 */
		runIdentificationAudit(gr: GlideRecord): void;

	}
}
declare namespace sn_cmdbgroup {
	/**
	 * The CMDBGroupAPI provided methods for performing actions on CMDB groups.
    * The CMDBGroupAPI is a scoped static class. To use the class you must include the namespace identifier sn_cmdbgroup before the CMDBGroupAPI object. For example:
	 */
	declare class CMDBGroupAPI {
		/**
		 * Returns all CIs for this group. This includes all manual CIs and the list of CIs from the Query Builder's saved query.
		 * @groupId The sysId of the CMDB group.
		 * @requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL restrictions.
		 */
		getAllCI(groupId: String, requireCompleteSet: Boolean): String;

		/**
		 * Returns all CIs returned from all saved query builder's query IDs for the specified group.
		 * @groupId The sysId of the CMDB group.
		 * @requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL restrictions.
		 */
		getAllCIFromQueryBuilder(groupId: String, requireCompleteSet: Boolean): String;

		/**
		 * Returns the CMDB group's manual CI list.
		 * @groupId The sysId of the CMDB group.
		 * @requireCompleteSet When true, returns an error string if any CIs are filtered out by ACL restrictions.
		 */
		getManualCIList(groupId: String, requireCompleteSet: Boolean): String;

		/**
		 * Returns the query builder's query IDs for the specified CMDB group.
		 * @groupId The sysId of the CMDB group.
		 * @requireCompleteSet When true, returns an empty string if any CIs are filtered out by ACL restrictions.
		 */
		getSavedQueryIdList(groupId: String, requireCompleteSet: Boolean): String;

		/**
		 * Sets the manual CI list for the specified group. The existing manual CI list is overwritten. CI sysIds not found in the cmdb_ci table are ignored.
		 * @groupId The sysId of the CMDB group.
		 * @ciSysIds Comma separated list of CI sysIds.
		 */
		setManualCIList(groupId: String, ciSysIds: String): String;

		/**
		 * Sets the saved query ID list for the specified group. The existing query ID list is overwritten. Query sysIds not found in the qb_saved_query table are ignored.
		 * @groupId The sysId of the CMDB group.
		 * @queryIds Comma separated list of saved query sysIds.
		 */
		setSavedQueryIdList(groupId: String, queryIds: String): String;

	}
}
declare namespace sn_connect {
	/**
	 * Conversation API enables you to create or modify Connect conversations.
    * To use this class in a scoped application, use the sn_connect namespace identifier. The Connect Scriptable APIs plugin (ID: com.glide.connect.scriptable) should be enabled to access the Conversation API.
	 */
	declare class Conversation {
		/**
		 * Add a user to a conversation.
		 * @sysID The sys_ID of the user you want to add to a conversation.
		 */
		addSubscriber(sysID: String): void;

		/**
		 * Create a Connect conversation.
		 * @name Create a conversation with a specific name.
		 * @type Include a specific conversation type. The type is determined by the type choice list. The base system includes the following type options: connect support group peer qanda team
		 */
		create(name: String, type: String): Object;

		/**
		 * Get an existing Connect conversation by sys_id.
		 * @sysID The sys_id of the conversation record.
		 */
		get(sysID: String): Object;

		/**
		 * Remove a user from a conversation.
		 * @SysID The sys_id of the user you want to remove from a conversation.
		 */
		removeSubscriber(SysID: String): void;

		/**
		 * Send a message to a conversation.
		 * @Body The main text of the message.
		 * @Field The field you want the message to appear as. Only use this option if adding a message to a record conversation. Choose from work_notes, comments, or system. Using the field system treats the message as a system message.
		 */
		sendMessage(Body: String, Field: String): void;

	}
	/**
	 * The Queue API allows you to retrieve or join a Connect Support chat queue.
    * To use this class in a scoped application, use the sn_connect namespace identifier. The Connect Scriptable APIs plugin (ID: com.glide.connect.scriptable) should be enabled to access the Queue API.
	 */
	declare class Queue {
		/**
		 * Get an existing chat queue by sys_ID.
		 * @SysID The sysID of a queue from the chat_queue table.
		 */
		get(SysID: String): Object;

		/**
		 * Add the current user to an existing Connect Support chat queue. Use a sysID from the chat_queue table.
		 * @Question Type a question to add to the queue.
		 */
		join(Question: String): void;

	}
}
declare namespace sn_discovery {
	/**
	 * The methods of the DiscoveryAPI - Scoped class launch a quick Discovery of a single IPv4 address and return summaries of previously launched Discovery statuses for a single CI or for all scanned CIs.
    * 
	 */
	declare class DiscoveryAPI {
		/**
		 * Used to discover a single IPv4 address.
		 * @IPaddress IP address to discover.
		 * @application Application configured for the MID Server.
		 * @source (Optional) Source of the Discovery, displayed in the optional Source field in the Discovery Status record, which indicates how the Discovery was triggered. If no source is specified, the system uses Discovery_API as the source. To define a source, you must have an application value. If no application is defined, use a place holder of NULL in the expression.
		 */
		discoverIpAddress(IPaddress: string, application: string, source: string): string;

		/**
		 * Used to return a summary of a configuration item's Discovery status given the specific status sys_id and IPv4 address.
		 * @ipAddress The IPv4 address that was scanned.
		 * @discoveryStatusSysId The sys_id of the Discovery status record for the IP address that was scanned.
		 */
		reportCiIpAddressStatus(ipAddress: string, discoveryStatusSysId: string): array;

		/**
		 * Used to return a summary of a CI Discovery status given a specific Discovery Status sys_id.
		 * @sys_id The sys_id of a Discovery status record.
		 */
		reportCiStatus(sys_id: string): array;

	}
	/**
	 * The ReportCiStatusOutputJS methods are getters that return specific object properties for the DiscoveryAPI reportCiIpAddressStatus method and then convert the information into a JSON string.
    * 
	 */
	declare class ReportCiStatusOutputJS {
		/**
		 * Used to return the state of the scanned CI.
		 */
		getCiOperationStatus(): string;

		/**
		 * Used to return the value in the cmdb_ci field from the discovery_device_history table for the CI being scanned.
		 */
		getCmdbCI(): string;

		/**
		 * Used to return the value from the State field in the Discovery Status [discovery_status] table.
		 */
		getDiscoveryState(): string;

		/**
		 * Used to return the value from the source field in the discovery_device_history table for the CI being scanned.
		 */
		getIpAddress(): string;

		/**
		 * Used to return the value from the issues field in the discovery_device_history table for the CI being scanned.
		 */
		getIssues(): integer;

		/**
		 * Used to return the value from the issues_link field in the discovery_device_history table for the CI being scanned.
		 */
		getIssuesLink(): string;

		/**
		 * Used to serialized the ReportCiStatusOutputJS object.
		 */
		toJson(): string;

	}
}
declare namespace sn_fd {
	/**
	 * Runs activated Flow Designer flows.
    * The Flow API can only be used in server scripts. Use the sn_fd namespace to access the Flow API. Before interacting with a flow using the Flow API, you must first create and activate the flow in the Flow Designer interface. Because the Flow API only interacts with pre-built flows, there is no constructor for the class. This API is deprecated and replaced by the FlowAPI
	 */
	declare class Flow {
		/**
		 * Ignores the trigger and runs an activated flow asynchronously.
		 * @scopeNameflowName The application scope for the flow and the internal name of the flow to run. If scopeName is not included, the scope of the user currently logged in is used. Retrieve the internal name of the flow using the Internal name column on the Flow Designer landing page.
		 * @flowInputs Name-value pairs in <String, Object> format that define record-based flow inputs. To call a flow with a record-based trigger, use the format: var flowInputs = {}; flowInputs['current'] = glideRecord; flowInputs['table_name'] = glideRecord.getTableName(); The GlideRecord object must be named 'current'. To call a flow with a Service Catalog trigger, use the format: var flowInputs = {}; flowInputs['request_item'] = glideRecord; flowInputs['table_name'] = glideRecord.getTableName(); The GlideRecord object must be named 'request_item'.
		 */
		startAsync(scopeNameflowName: String, flowInputs: Map): Object;

	}
	/**
	 * Runs published Flow Designer subflows.
    * The Subflow API can only be used in server scripts. Use the sn_fd namespace to access the Subflow API. Before interacting with a subflow using the Subflow API, you must first create and publish the subflow in the Flow Designer interface. Because the Subflow API only interacts with pre-built subflows, there is no constructor for the class. This API is deprecated and replaced by the FlowAPI.
	 */
	declare class Subflow {
		/**
		 * Runs a published subflow asynchronously.
		 * @scopeNamesubflowName The application scope for the subflow and the internal name of the subflow to run. If scopeName is not included, the scope of the user currently logged in is used. Retrieve the internal name of the subflow using the Internal name column on the Flow Designer landing page.
		 * @inputs Name-value pairs that define subflow inputs. If a subflow includes mandatory inputs, they must be included. For inputs of Reference or Document ID field types, use a GlideRecord object as the value.
		 */
		startAsync(scopeNamesubflowName: String, inputs: Map): Object;

	}
}
declare namespace sn_hw {
	/**
	 * The HistoryWalker API uses the audit/history tables to generate a historical version of an existing record. It supports the ability to return a GlideRecord to a previous update count (walked GlideRecord) with the appropriate GlideElements populated. After the walked GlideRecord is retrieved, the API provides the ability to move forward and backward the update numbers navigating through its historical updates.
    * The associated methods can be used in scoped and global scripts. To use this class in scoped and global applications, use the sn_hw namespace identifier. The History Walker plugin (com.glide.history_walker) that is enabled by default is required to access the HistoryWalker API. Note: For offline updates, HistoryWalker API will be initiated automatically and the only two methods that you can use are: walkTo(0) (the input argument for this method can only be zero) and walkForward(). Other available methods cannot be invoked for offline updates. The HistoryWalker API provides two ways to retrieve the audit data: Using History Set: A History Set entry is created (if not available or not up to date) from the data in the sys_audit table for the record that you are going to walk through. The History Set table contains records (History Lines) with the actual changes to field values that occurred. Methods of the HistoryWalker API retrieve the history data from the generated History Lines, instead of querying the sys_audit table. Using Audit table: In this case, the HistoryWalker API extracts data directly querying the sys_audit table. By default, it populates the data to support the “changes”, “changesFrom” and “changesTo” methods in the walked record, as well as provides record and field level security. Additionally, it can enable journal fields and variables to be also populated in the walked GlideRecord when walking through the updates. This API enables you to: apply the appropriate history/audit data to get an existing GlideRecord to the state it was in a specific update count. instruct the HistoryWalker API to use sys_audit table instead of sys_history_set/sys_history_line tables to retrieve its data. turn off row-level access control. turn off field-level access control. turn off retrieval and processing of “changes” data. Enable journal fields. Enable variables.
	 */
	declare class HistoryWalker {
		/**
		 * Fetches the database record based on the parameters, using the History Sets to retrieve the historic data.
		 * @tableName Name of table containing the record to retrieve.
		 * @sydId sys_id of the record to retrieve.
		 */
		constructor(tableName: String, sydId: String);

		/**
		 * Fetches the database record based on the parameters, using the History Sets or Audit data to retrieve the historic data, depending on the third parameter.
		 * @tableName Name of table containing the record to retrieve.
		 * @sydId sys_id of the record to retrieve.
		 * @useAudit If set to true, uses audit data to retrieve historic date. If set to false, uses history set to retrieve historic date.
		 */
		constructor(tableName: String, sydId: String, useAudit: Boolean);

		/**
		 * Gets the update number of the current walked glide record.
		 */
		getUpdateNumber(): int;

		/**
		 * Gets the record filled with the history/audit data after walking to an update number.
		 */
		getWalkedRecord(): GlideRecord;

		/**
		 * Gets a copy of the record filled with the history/audit data after walking to an update number.
		 */
		getWalkedRecordCopy(): GlideRecord;

		/**
		 * Specifies if the record-level read access is applied on the record when retrieving from the database.
		 */
		isFieldLevelSecurity(): Boolean;

		/**
		 * Specifies if the record-level read access is applied on the record when retrieving from the database.
		 */
		isRecordLevelSecurity(): Boolean;

		/**
		 * Specifies if any of the methods that walk the record from one update to another, support the “changes” data for each element.
		 */
		isWithChanges(): Boolean;

		/**
		 * Specifies if journal type fields are populated from the historical values.
		 */
		isWithJournalFields(): Boolean;

		/**
		 * Specifies if values are set for variables that are recorded in the history.
		 */
		isWithVariables(): Boolean;

		/**
		 * Sets the field-level read access on each element before setting the historical value of that element in the GlideRecord. If the field-level security is enabled, it prevents the API to populate the fields of the walked record that the user of the API does not have access to.
		 * @fieldLevelSecurity If set to true, field-level security is enabled. The default value is true.
		 */
		setFieldLevelSecurity(fieldLevelSecurity: Boolean): void;

		/**
		 * Sets the record-level read access on the record when retrieving from the database. The record-level security prevents the API to retrieve the walked record if the user of the API does not have access to the GlideRecord.
		 * @recordLevelSecurity If set to true, record-level read access security is enabled. The default value is true.
		 */
		setRecordLevelSecurity(recordLevelSecurity: Boolean): void;

		/**
		 * Sets the “changes” data support for each element for a method that walks the record from one update to another.
		 * @withChanges If set to true, the “changes” data is supported for each element. The default value is true.
		 */
		setWithChanges(withChanges: Boolean): void;

		/**
		 * Specifies if journal type fields are populated from the historical values.
		 * @withJournalFields If set to true, include journal-type fields. Th default value is false.
		 */
		setWithJournalFields(withJournalFields: Boolean): void;

		/**
		 * Specifies if variables are populated from the historical values.
		 * @withVariables If set to true, values are populated for variables. The default value is false.
		 */
		setWithVariables(withVariables: Boolean): void;

		/**
		 * Applies the appropriate history/audit data to get a walked GlideRecord to the state when it was one update number backward. If the previous update count is missing from the history/audit data, it will walk to the previous available update count.
		 */
		walkBackward(): Boolean;

		/**
		 * Applies the appropriate history/audit data to get a walked GlideRecord to the state when it was one update number forward. If next update count is missing from the history/audit data, it will walk to the next available update count.
		 */
		walkForward(): Boolean;

		/**
		 * Applies the appropriate history/audit data to get a GlideRecord to the state it was in a specific update count. Use getWalkedRecord() or getWalkedRecordCopy() after walking to an update number to retrieve the “walked” GlideRecord.
		 * @updateCount The update number to walk to.
		 */
		walkTo(updateCount: Integer): Boolean;

	}
}
declare namespace sn_impex {
	/**
	 * You can parse .xlsx formatted Excel files.
    * The GlideExcelParser methods can be used in global and scoped scripts. The API name space identifier "sn_impex" must be used when creating a GlideExcelParser object.
	 */
	declare class GlideExcelParser {
		/**
		 * Creates an instance of GlideExcelParser.
		 */
		constructor();

		/**
		 * Close the connection to the input stream and release the document.
		 */
		close(): void;

		/**
		 * Returns a list of column headers from the parsed document.
		 */
		getColumnHeaders(): Array;

		/**
		 * Returns the error message when the parse() method fails.
		 */
		getErrorMessage(): String;

		/**
		 * Get the current row values and headers.
		 */
		getRow(): Object;

		/**
		 * Moves to the next row.
		 */
		next(): Boolean;

		/**
		 * Parse an XLSX formatted Excel document.
		 * @inputStream The Excel document to be parsed.
		 */
		parse(inputStream: GlideScriptableInputStream): Boolean;

		/**
		 * Set the number of the header row to be retrieved.
		 * @headerRowNumber The header row to be retrieved.
		 */
		setHeaderRowNumber(headerRowNumber: Number): void;

		/**
		 * Return an empty value instead of null when an Excel cell is not present.
		 * @empty When true, cells that are not present return an empty value. When false, cells that are not present return null.
		 */
		setNullToEmpty(empty: Boolean): void;

		/**
		 * Set the name of the sheet to be retrieved.
		 * @sheetName The name of the sheet to be retrieved.
		 */
		setSheetName(sheetName: String): void;

		/**
		 * Set the number of the Excel sheet to be retrieved.
		 * @sheetNumber The Excel sheet number to retrieve.
		 */
		setSheetNumber(sheetNumber: Number): void;

	}
}
declare namespace sn_interaction {
	/**
	 * Use the Interaction API to define the behavior for interaction records.
    * This class requires the Interaction Logging, Routing, and Queueing plugin (com.glide.interaction). Note: This method has been deprecated. To use this class in a scoped API, use the sn_interaction namespace identifier.
	 */
	declare class Interaction {
		/**
		 * Accept a new interaction.
		 */
		accept(): Boolean;

		/**
		 * Create an interaction.
		 * @options Field values for an interaction record. The channel field with the channel sys_id and channel metadata are required. If a queue is not included in the parameter, the system returns Interaction b2c0a3af202a1300964f959e0488de75 has no queue specified... running queue matching rules.
		 */
		create(options: Object): Object;

		/**
		 * Get an interaction record.
		 * @interaction Interaction record from the interaction table [interaction] that is retrieved from the system.
		 */
		getInteraction(interaction: GlideRecord): Object;

		/**
		 * Transfer an interaction record to an agent using the sys_id for the agent.
		 * @SysID The sys_id of the user you want to transfer an interaction record to.
		 */
		transferToAgent(SysID: String): void;

		/**
		 * Transfer an interaction record to an interaction queue.
		 * @SysID The sys_id of the interaction queue you want to transfer the interaction record to.
		 */
		transferToQueue(SysID: String): void;

	}
	/**
	 * Use the InteractionQueue API to configure the behavior for interaction queues and connectors.
    * Note: This API has been deprecated, use the Queue and Agent APIs instead. This class requires the Interaction Logging, Routing, and Queueing plugin (com.glide.interaction). To use this class in a scoped API, use the sn_interaction namespace identifier.
	 */
	declare class InteractionQueue {
		/**
		 * Assign the next interaction in a queue to the current user.
		 */
		acceptNext(): Object;

		/**
		 * Get an existing interaction queue by sys_id.
		 * @queue Queue from the interaction_queue table.
		 */
		get(queue: GlideRecord): Object;

		/**
		 * Returns a list of agents who are online and assigned to a particular queue.
		 */
		getAvailableAgents(): Array;

		/**
		 * Check if a user is an agent for a queue.
		 * @queue Sys ID for a queue in the interaction_queue table.
		 */
		isAgentFor(queue: GlideRecord): Boolean;

		/**
		 * Find out whether the queue is in schedule.
		 */
		isInSchedule(): object;

	}
}
declare namespace sn_nlp_sentiment {
	/**
	 * SentimentAnalyser API performs sentiment analysis on a string value. To use this class in a scoped application, use the sn_nlp_sentiment namespace identifier. The Sentiment Analysis plugin ( com.snc.sentiment_analysis) must be enabled to access the SentimentAnalyser API.
    * Sentiment Analysis API should be used in a script that is treated as an admin-executing script. For example, we should use the Sentiment Analysis API in Script Action or Scheduled Job.
	 */
	declare class SentimentAnalyser {
		/**
		 * Creates an instance of the SentimentAnalyser class with the default connector configuration that is used for sentiment analysis.
		 */
		constructor();

		/**
		 * Creates an instance of the SentimentAnalyser class with the specified connector configuration that is used for sentiment analysis.
		 * @configGR GlideRecord object of a connector configuration
		 */
		constructor(configGR: GlideRecord);

		/**
		 * Performs sentiment analysis on the specified text.
		 * @inputText Text on which sentiment analysis should be performed.
		 */
		analyze(inputText: String): JSONobject;

		/**
		 * Performs sentiment analysis on an array of strings.
		 * @inputTextArray Array of text (string) on which sentiment analysis should be performed.
		 */
		analyzeMultiple(inputTextArray: Array): JSONArray;

		/**
		 * Performs sentiment analysis on an array of strings in the specified language.
		 * @inputTextArray Array of text (string) on which sentiment analysis should be performed.
		 * @language Language for the input text. This can very for different sentiment services.
		 */
		analyzeMultipleWithLanguage(inputTextArray: Array, language: String): JSONArray;

		/**
		 * Performs sentiment analysis on a specified text and language.
		 * @inputText Text on which sentiment analysis should be performed.
		 * @language Language for the input text. This can very for different sentiment services.
		 */
		analyzeWithLanguage(inputText: String, language: String): JSONobject;

		/**
		 * Returns the GlideRecord of the specified connector configuration.
		 * @connectorName Name of the connector configuration.
		 */
		getConnectorByName(connectorName: String): GlideRecordobject;

		/**
		 * Returns the GlideRecord of the default connector configuration.
		 */
		getDefaultConnector(): GlideRecordobject;

	}
}
declare namespace sn_notification {
	/**
	 * Perform actions in a third-party messaging application.
    * This class requires the Messaging Notification plugin (com.glide.notification.messaging) and an integration with a third-party messaging application such as Slack or Teams. Use these methods in an action script in the Message Actions [messaging_observer_handler] table. Use the sn_notification namespace to access the Messaging API.
	 */
	declare class Messaging {
		/**
		 * Sends a custom message to a third-party application in response to a messaging event. For example, you can send a custom welcome message to a Slack channel when the Now Actions application installs.
		 * @messagingApplication Third-party application to send a message to from the Messaging Entities [messaging_application] table.
		 * @recipient Recipient of the message. When the instance receives an inbound message, you can send a response to a Slack channel, Team, or individual user ID found in the inbound payload.
		 * @messagingContent Message content to send from the Messaging Contents [messaging_content] table.
		 * @target Record used to define dynamic field values in the message. Table must match the Target table field in the Messaging Contents record. If the Messaging Contents record does not use a target table, set the value to null.
		 */
		send(messagingApplication: GlideRecord, recipient: String, messagingContent: GlideRecord, target: GlideRecord): void;

	}
}
declare namespace sn_notify {
	/**
	 * The NotifyScoped API allows you to interact with Notify calls and SMS messages using scripts.
    * Access the scoped Notify class and its associated methods from the sn_notify namespace.
	 */
	declare class Notify {
		/**
		 * Calls the specified E.164-compliant telephone number.
		 * @notifyPhoneNumber Notify phone number from which to make the call. When you initiate a call, the outgoing call workflow for the number group associated with this number runs. Ensure this workflow includes a join conference call activity to connect the user to the conference call.
		 * @toPhoneNumber Phone number to call. Called numbers are added to the conference call.
		 * @conferenceCall Optional. If this parameter is passed in, the callers identified in the toPhoneNumber parameter are automatically joined into the conference call identified by this record. GlideRecord for the Notify Call [notify_call] table which identifies the conference call record. This record is automatically added to the outgoing call workflow scratchpad as the workflow.scratchpad.conference_call variable.
		 * @userSysId Optional. Unique identifier (sys_id) of the user associated with the call.
		 * @groupSysId Optional. Unique identifier (sys_id) of the group associated with the call.
		 * @sourceRecord Optional. Source record that prompted this call.
		 */
		call(notifyPhoneNumber: String, toPhoneNumber: String, conferenceCall: GlideRecord, userSysId: String, groupSysId: String, sourceRecord: GlideRecord): void;

		/**
		 * Creates a new conference call GlideRecord.
		 * @sourceRecord Optional. Record that initiated the request to create the conference call. Used to populate the source and table fields on notify_conference_call record.
		 */
		conferenceCall(sourceRecord: GlideRecord): GlideRecord;

		/**
		 * Resumes a call after it was put in a queue (on hold).
		 * @callRecord GlideRecord object on the Notify Call [notify_call] table with the held call you want to resume.
		 */
		dequeueCall(callRecord: GlideRecord): void;

		/**
		 * Forwards the specified call to a different call recipient.
		 * @call Notify call record or the telephony provider call ID, of the call to be forwarded.
		 * @destination Notify phone number record or an E.164-compliant phone number, of the caller to which to forward the call.
		 * @dtmf Dual Tone - Multi Frequency (DTMF) code to send upon call connection.
		 */
		forwardCall(call: GlideRecordorString, destination: GlideRecordorString, dtmf: String): void;

		/**
		 * Returns a list of client sessions that are available to receive calls.
		 * @notifyNumber Valid Notify phone number.
		 */
		getAvailableClients(notifyNumber: String): Array;

		/**
		 * Returns all phone numbers and short codes available to Notify.
		 */
		getPhoneNumbers(): List;

		/**
		 * Returns all short codes available to Notify.
		 */
		getShortCodes(): void;

		/**
		 * Returns client tokens for any active telephony drivers for use in WebRTC or mobile clients.
		 * @record GlideRecord to use to identify the Notify client, such as a group record or a user record.
		 */
		getTokens(record: GlideRecord): String;

		/**
		 * Returns the maximum amount of time that a client session stays active for a specified telephony driver before automatically timing out.
		 * @owner Name of the telephony driver for which to retrieve the session length. Valid values: Twilio: for the old driver TwilioDirect: for the new driver
		 */
		getTokenTTL(owner: String): Integer;

		/**
		 * Determines whether the specified phone number has the specified capability.
		 * @notifyPhoneNumber Phone number for which to check for the specified capability.
		 * @capability Capability to detect. The string text must be an exact match to what is in the phone.
		 */
		hasCapability(notifyPhoneNumber: String, capability: String): Boolean;

		/**
		 * Removes the specified caller from the current Notify conference call.
		 * @participant GlideRecord object containing the Notify Participant [notify_participant] record of the caller to remove from the conference call.
		 */
		kick(participant: GlideRecord): void;

		/**
		 * Performs one or more activities on an active Notify phone call.
		 * @callRecord Notify Call [notify_call] record of the call for which to apply the actions.
		 * @notifyAction NotifyAction object describing one or more activities to perform on the call.
		 */
		modifyCall(callRecord: GlideRecord, notifyAction: NotifyAction): void;

		/**
		 * Mutes the specified conference call participant.
		 * @participantRecord GlideRecord from the notify_participant table for the participant to mute.
		 */
		mute(participantRecord: GlideRecord): void;

		/**
		 * Puts the specified call into a queue (on hold).
		 * @callRecord GlideRecord object of the Notify Call record (notify_call table) to put on hold.
		 */
		queueCall(callRecord: GlideRecord): void;

		/**
		 * Sends a specified SMS message to the specified list of Notify clients (phone numbers).
		 * @notifyPhoneNumber Phone number from which the SMS message is being sent.
		 * @toPhoneNumbers Comma separated list of E.164-compliant phone numbers to which to send the SMS message.
		 * @messageBody SMS text to send.
		 * @source Source record that prompted this SMS message, such as an incident.
		 */
		sendBulkSMS(notifyPhoneNumber: NotifyPhoneNumber, toPhoneNumbers: String, messageBody: String, source: GlideRecord): String;

		/**
		 * Sends an SMS text message to an E.164-compliant phone number.
		 * @notifyPhoneNumber Notify phone number or short code to which to send this SMS message.
		 * @toPhoneNumber E.164-compliant phone number to which to send the SMS message.
		 * @messageBody SMS text message.
		 * @source Source record that prompted this SMS message, such as an incident.
		 */
		sendSMS(notifyPhoneNumber: NotifyPhoneNumber, toPhoneNumber: String, messageBody: String, source: GlideRecord): String;

		/**
		 * Unmutes the specified conference call participant.
		 * @participantRecord GlideRecord from the notify_participant table for the participant to unmute.
		 */
		unmute(participantRecord: GlideRecord): void;

	}
	/**
	 * The Scoped NotifyPhoneNumber API allows you to query information about a Notify phone number.
    * Access the scoped NotifyPhoneNumber API and its associated methods in the sn_notify namespace.
	 */
	declare class NotifyPhoneNumber {
		/**
		 * Returns the international dialing code for a Notify phone number.
		 */
		getDialCode(): String;

		/**
		 * Returns the ID of this phone number as defined by the telephony provider.
		 */
		getID(): String;

		/**
		 * Returns the numerical phone number for the current Notify caller.
		 */
		getNumber(): String;

		/**
		 * Returns the telephony provider associated with this phone number.
		 */
		getOwner(): String;

		/**
		 * Returns the country associated with the phone number.
		 */
		getTerritory(): String;

		/**
		 * Determines if the Notify phone number supports conference calls.
		 */
		supportsConferenceCall(): Boolean;

		/**
		 * Determines if the Notify phone number supports receiving phone calls.
		 */
		supportsIncomingPhoneCall(): Boolean;

		/**
		 * Determines if the Notify phone number supports receiving SMS messages.
		 */
		supportsIncomingSMS(): Boolean;

		/**
		 * Determines if the Notify phone number supports initiating phone calls.
		 */
		supportsOutgoingPhoneCall(): Boolean;

		/**
		 * Determines if the Notify phone number supports sending SMS messages.
		 */
		supportsOutgoingSMS(): Boolean;

		/**
		 * Determines if the Notify phone number supports recording phone calls.
		 */
		supportsRecording(): Boolean;

		/**
		 * Determines if the Notify phone number supports calls to a browser, such as in a WebRTC implementation.
		 */
		supportsWebRTC(): Boolean;

	}
}
declare namespace sn_sc {
	/**
	 * CartJS API enables you to access the shopping cart for a user. To use this class in a scoped application, use the sn_sc namespace identifier. The Service Catalog Scoped API plugin (ID: com.glideapp.servicecatalog.scoped.api) that is enabled by default is required to access the CartJS API.
    * 
	 */
	declare class CartJS {
		/**
		 * Creates an instance of the CartJS class for the default cart of the user who is currently logged in.
		 */
		constructor();

		/**
		 * Creates an instance of the CartJS class with the name of a defined cart for the user who is currently logged in.
		 * @cartName Name of a defined cart for the user who is currently logged in.
		 */
		constructor(cartName: String);

		/**
		 * Adds the request for a catalog item to the current cart.
		 * @request A JSON object that contains the details of the catalog item to be added to the cart. The structure of the request object is: { 'sysparm_id': item_id, 'sysparm_quantity': item_quantity, 'variables':{ 'var_name': 'var_value', ... } } item_id: sys_id of the item to be added to the cart item_quantity: Number of items to be added. Default value is 1. var_name: Name of the question. var_value: Value of the answer (Not the display value).
		 */
		addToCart(request: Map): JSON;

		/**
		 * Specifies if the current user has the required role to edit the Request for field.
		 */
		canViewRF(): Boolean;

		/**
		 * Performs the cart checkout. If the two-step checkout is enabled, returns the order summary. If the two-step checkout is disabled, the cart is submitted and details of the generated request are returned.
		 */
		checkoutCart(): JSON;

		/**
		 * Deletes the current cart.
		 */
		empty(): void;

		/**
		 * Returns the cart details.
		 */
		getCartDetails(): Object;

		/**
		 * Returns the cart id of the current cart.
		 */
		getCartID(): String;

		/**
		 * Returns the GlideRecord for the cart item (sc_cart_item) in the current cart.
		 */
		getCartItems(): GlideRecord;

		/**
		 * Gets the delivery address for the current cart.
		 */
		getDeliveryAddress(): String;

		/**
		 * Gets the sys_id from the sys_user record of the user for whom the cart is requested.
		 */
		getRequestedFor(): String;

		/**
		 * Gets the name from the user record of the user for whom the current cart is requested.
		 */
		getRequestedForDisplayName(): String;

		/**
		 * Gets the special instructions for the current cart.
		 */
		getSpecialInstructions(): String;

		/**
		 * Orders a single item. If two-step checkout is enabled, the item is added to the cart and the cart Sys ID is returned. If two-step checkout is disabled, the item is ordered and the generated request Sys ID and number is returned.
		 * @request A JSON object that contains details of the catalog item to be ordered. The structure of the request object is: { 'sysparm_id' : item_id, 'sysparm_quantity' : item_quantity, 'variables' : { 'var_name' : 'var_value', ... } } item_id: Sys ID of the item to be added to the cart. Required. item_quantity: Number of items to be added. Default value is 1. var_name: Name of the question. var_value: Value of the answer (Not the display value).
		 */
		orderNow(request: Map): JSON;

		/**
		 * Sets the delivery address for the current cart.
		 * @address Delivery address for the current cart.
		 */
		setDeliveryAddress(address: String): void;

		/**
		 * Sets the sys_id in the sys_user record of the user for whom the cart is requested.
		 * @user sys_id to be set in the sys_user record of the user for whom the cart is requested.
		 */
		setRequestedFor(user: String): void;

		/**
		 * Sets the special instructions for the current cart.
		 * @specialInstructions Special instructions for the current cart.
		 */
		setSpecialInstructions(specialInstructions: String): void;

		/**
		 * Updates special instructions, requested for, and delivery address from the request parameter and performs the cart checkout. Use this API to modify the mentioned parameters of the cart and perform the cart checkout simultaneously. Missing parameters in the request object will have their default value.
		 * @request A JSON object that contains details of the cart to be submitted. The structure of the request object is: { 'special_instructions' : 'instructions', 'sysparm_requested_for' : requested_for, 'delivery_address' : 'address' } instructions: Special instructions for the request. requested_for : sys_id of the requested_for user. address: Delivery address for the request.
		 */
		submitOrder(request: Map): JSON;

		/**
		 * Updates an item in the cart.
		 * @request A JSON object that contains details of the catalog item to be updated. The structure of the request object is: { 'sysparm_quantity' : item_quantity, 'sysparm_requested_for' : requested_for, 'variables' : { 'var_name' : 'var_value', ... } } item_quantity: Number of items to be added. Default value is 1. var_name: Name of the question. var_value: Value of the answer (Not the display value).
		 * @cart_item_id sys_id of the cart item to be modified.
		 */
		updateItem(request: Map, cart_item_id: String): JSON;

	}
	/**
	 * CatalogClientScript API enables you to create, modify, or delete catalog client script records. To use this class in a scoped application, use the sn_sc namespace identifier. The Service Catalog Scoped API plugin (ID: com.glideapp.servicecatalog.scoped.api) that is enabled by default is required to access the CatalogClientScript API.
    * 
	 */
	declare class CatalogClientScript {
		/**
		 * Creates an instance of the CatalogClientScript class.
		 */
		constructor();

		/**
		 * Adds a script to the catalog client script.
		 * @script Script to be added to the catalog client script.
		 */
		addScript(script: String): void;

		/**
		 * Specifies if the catalog client script runs on a catalog item.
		 * @flag If true, the catalog client script runs on the catalog item. If false, the catalog client script does not run on the catalog item.
		 */
		appliesToCatalogItem(flag: Boolean): void;

		/**
		 * Specifies if the catalog client script runs on a catalog task.
		 * @flag If true, the catalog client script runs on the catalog task. If false, the catalog client script does not run on the catalog task.
		 */
		appliesToCatalogTask(flag: Boolean): void;

		/**
		 * Specifies if the catalog client script runs on a requested item.
		 * @flag If true, the catalog client script runs on the requested item. If false, the catalog client script does not run on the requested item.
		 */
		appliesToRequestedItem(flag: Boolean): void;

		/**
		 * Specifies if the catalog client script runs on a requested item.
		 * @flag If true, the catalog client script runs on the target record. If false, the catalog client script does not run on the target record.
		 */
		appliesToTargetRecord(flag: Boolean): void;

		/**
		 * Inserts the defined catalog client script in the catalog_script_client table.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(standardUpdate: Boolean): String;

		/**
		 * Deletes the defined catalog client script.
		 * @sys_id sys_id of the catalog client script.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		deleteRecord(sys_id: String, standardUpdate: Boolean): void;

		/**
		 * Defines attribute values for the catalog client script.
		 * @attributes A JSON object that has mapping for the field and value pairs.
		 */
		setAttributes(attributes: Map): void;

		/**
		 * Associates a catalog item with the catalog client script.
		 * @sys_id sys_id of the catalog item.
		 */
		setCatalogItem(sys_id: String): void;

		/**
		 * Runs the catalog client script when a variable value is updated.
		 * @sys_id sys_id of the variable.
		 */
		setOnChangeVariable(sys_id: String): void;

		/**
		 * Associates a variable set with the catalog client script.
		 * @sys_id sys_id of the variable set.
		 */
		setVariableSet(sys_id: String): void;

	}
	/**
	 * CatalogItemVariable API enables you to create and modify service catalog item variables using scripts.
    * 
	 */
	declare class CatalogItemVariable {
		/**
		 * Insert the defined catalog item variable.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(standardUpdate: Boolean): String;

		/**
		 * Delete the defined catalog item variable.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		deleteRecord(standardUpdate: Boolean): void;

		/**
		 * Get a mapping of catalog item variable attribute values.
		 * @columns Specify the set of columns that you would like the values for.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		read(columns: Object, standardUpdate: Boolean): Object;

		/**
		 * Define attribute values for this catalog item variable.
		 * @attributes An object mapping column names to values.
		 */
		setAttributes(attributes: Object): void;

		/**
		 * Use to update current catalog item variable with set values.
		 * @columnValues An object mapping column names to values.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		update(columnValues: Object, standardUpdate: Boolean): void;

	}
	/**
	 * CatalogItemVariableSet API enables you to create and modify service catalog item variable sets using scripts.
    * 
	 */
	declare class CatalogItemVariableSet {
		/**
		 * Insert the defined catalog item variable set.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(standardUpdate: Boolean): String;

		/**
		 * Delete the defined catalog item variable.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		deleteRecord(standardUpdate: Boolean): void;

		/**
		 * Get a mapping of catalog item variable set attribute values.
		 * @columns Specify the set of columns that you would like the values for.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		read(columns: Object, standardUpdate: Boolean): Object;

		/**
		 * Define attribute values for this catalog item variable set.
		 * @attributes An object mapping column names to values.
		 */
		setAttributes(attributes: Object): void;

		/**
		 * Use to update current catalog item variable set with set values.
		 * @columnValues An object mapping column names to values.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		update(columnValues: Object, standardUpdate: Boolean): void;

	}
	/**
	 * CatalogItemVariableSetM2M API enables you to create and modify service catalog item variable set many-to-many (M2Ms) using scripts.
    * 
	 */
	declare class CatalogItemVariableSetM2M {
		/**
		 * Insert the defined catalog item variable set M2M.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(standardUpdate: Boolean): String;

		/**
		 * Delete the defined catalog item variable set M2M.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		deleteRecord(standardUpdate: Boolean): void;

		/**
		 * Get a mapping of catalog item variable set M2M attribute values.
		 * @columns Specify the set of columns that you would like the values for.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		read(columns: Object, standardUpdate: Boolean): Object;

		/**
		 * Define attribute values for this catalog item variable set M2M.
		 * @attributes An object mapping column names to values.
		 */
		setAttributes(attributes: Object): void;

		/**
		 * Use to update current catalog item variable set M2M with set values.
		 * @columnValues An object mapping column names to values.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		update(columnValues: Object, standardUpdate: Boolean): void;

	}
	/**
	 * CatalogJS API enables you to use methods to check and retrieve catalog-specific properties. To use this class in a scoped application, use the sn_sc namespace identifier. The Service Catalog Scoped API plugin (com.glideapp.servicecatalog.scoped.api) that is enabled by default is required to access the CatalogJS API.
    * 
	 */
	declare class CatalogJS {
		/**
		 * Creates an instance of the catalog class for the specified glide record object.
		 * @gr Glide Record pointing to the sc_catalog table.
		 */
		constructor(gr: Object);

		/**
		 * Creates an instance of the Catalog class with the specified sys_id.
		 * @sys_id sys_id of the Catalog.
		 */
		constructor(sys_id: String);

		/**
		 * Specifies if the catalog is viewable for the user.
		 * @mobile True if the view is mobile view. Else, false.
		 */
		canView(mobile: Boolean): Boolean;

		/**
		 * If only one active catalog exists, that catalog is returned. Else, the earliest catalog created is returned, from the list of the catalogs that the user can view. If no catalog is available, null is returned.
		 */
		getAvailableCatalog(): Object;

		/**
		 * Returns the catalog background color.
		 */
		getBackgroundColor(): String;

		/**
		 * Specifies the number of catalogs active in the catalog table.
		 */
		getCatalogCount(): Integer;

		/**
		 * Returns the categories for the specified catalog.
		 */
		getCategories(): ArrayList;

		/**
		 * Specifies the sys_ids of the categories in the specified catalog.
		 */
		getCategoryIds(): ArrayList;

		/**
		 * Specifies the catalog description.
		 */
		getDescription(): String;

		/**
		 * Returns the catalog desktop image value.
		 */
		getDesktopImageSRC(): String;

		/**
		 * Returns the catalog gliderecord.
		 */
		getGr(): GlideRecord;

		/**
		 * Returns the catalog header icon.
		 */
		getHeaderIconSRC(): String;

		/**
		 * Specifies the sys_id of the catalog.
		 */
		getID(): String;

		/**
		 * Returns the title of the catalog.
		 */
		getTitle(): String;

		/**
		 * Specifies if the catalog has categories.
		 */
		hasCategories(): Boolean;

		/**
		 * Specifies if the catalog has catalog items.
		 */
		hasItems(): Boolean;

		/**
		 * Specifies if the wish list is enabled for a catalog.
		 */
		isWishlistEnabled(): Boolean;

	}
	/**
	 * CatalogSearch API enables you to search catalog item. To use this class in a scoped application, use the sn_sc namespace identifier. The Service Catalog Scoped API plugin (ID: com.glideapp.servicecatalog.scoped.api) that is enabled by default is required to access the CatalogSearch API.
    * 
	 */
	declare class CatalogSearch {
		/**
		 * Creates an instance of the CatalogSearch class.
		 */
		constructor();

		/**
		 * Searches a catalog item based on a search term. The search can be narrowed down to a catalog category level.
		 * @catalogID Identifier of the catalog that is searched.
		 * @categoryID Identifier of the catalog category that is searched.
		 * @term Search term.
		 * @mobile If true, only catalog items exposed for mobile are searched.
		 * @depthSearch If true, subcategories are also searched.
		 */
		search (catalogID: String, categoryID: String, term: String, mobile: Boolean, depthSearch: Boolean): GlideRecord;

	}
	/**
	 * CatCategory API enables you to create and modify service catalog categories using scripts.
    * 
	 */
	declare class CatCategory {
		/**
		 * Adds the Available For user criteria to a catalog category.
		 * @action Specify add to add the user criteria to the Available For list. Specify delete to delete the user criteria from the Available For list.
		 * @criteriaIDs Array of the user criteria sys_ids.
		 */
		availableForUserCriteria(action: String, criteriaIDs: Array): void;

		/**
		 * Determines whether a specified user can view a specified category on a mobile device or desktop.
		 * @isMobile Flag that indicates whether to verify the user for access on a mobile device or desktop. true: validate for mobile. false: validate for desktop.
		 * @userSysId Unique identifier of the user to validate.
		 */
		canView(isMobile: Boolean, userSysId: String): Boolean;

		/**
		 * Insert the defined category.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(standardUpdate: Boolean): String;

		/**
		 * Deletes the category record on which the CatCategory class was initially instantiated.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		deleteRecord(standardUpdate: Boolean): void;

		/**
		 * Returns the sys_id of the category.
		 */
		getID(): String;

		/**
		 * Adds the Not Available For user criteria to a catalog category.
		 * @action Specify add to add the user criteria to the Not Available For list. Specify delete to delete the user criteria from the Not Available For list.
		 */
		notAvailableForUserCriteria(action: String): void;

		/**
		 * Get a mapping of the category.
		 * @columns Specify the set of columns that you would like the values for.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		read(columns: Object, standardUpdate: Boolean): Object;

		/**
		 * Define attribute values for this category.
		 * @attributes Set the attributes for new field and value pairs.
		 */
		setAttributes(attributes: Object): void;

		/**
		 * Define the table name for this category.
		 * @tableName Specify the name of the table that extends sc_category.
		 */
		setTableName(tableName: String): void;

		/**
		 * Use to update current category.
		 * @columnValues Object mapping column names to values.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		update(columnValues: Object, standardUpdate: Boolean): void;

	}
	/**
	 * CatItem API enables you to create and modify service catalog items using scripts.
    * 
	 */
	declare class CatItem {
		/**
		 * Adds the Available For user criteria to a catalog item.
		 * @action Specify add to add the user criteria to the Available For list. Specify delete to delete the user criteria from the Available For list.
		 * @criteriaIDs Array of the user criteria sys_ids.
		 */
		availableForUserCriteria(action: string, criteriaIDs: Array): void;

		/**
		 * Specifies if the user has access to view the catalog item on global search.
		 * @isMobile True if the search is in mobile view. Else, false.
		 */
		canViewOnSearch(isMobile: Boolean): Boolean;

		/**
		 * Insert the defined catalog item.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(standardUpdate: Boolean): void;

		/**
		 * Delete the defined catalog item.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		deleteRecord(standardUpdate: Boolean): void;

		/**
		 * Specifies the first category that the user can view in a catalog.
		 * @catalogId sys_id of the catalog.
		 */
		getFirstAccessibleCategoryForSearch(catalogId: String): String;

		/**
		 * Returns the class name for the current catalog item record.
		 */
		getRecordClass(): String;

		/**
		 * Specifies if the catalog item is available in service portal.
		 */
		isVisibleServicePortal(): Boolean;

		/**
		 * Adds the Not Available For user criteria to a catalog item.
		 * @action Specify add to add the user criteria to the Not Available For list. Specify delete to delete the user criteria from the Not Available For list.
		 */
		notAvailableForUserCriteria(action: String): void;

		/**
		 * Get a mapping of catalog item attribute values.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 * @columns Specify the set of columns that you would like the values for.
		 */
		read(standardUpdate: Boolean, columns: Object): Object;

		/**
		 * Define attribute values for this catalog item.
		 * @attributes An object mapping column names to values.
		 */
		setAttributes(attributes: Object): void;

		/**
		 * Define the catalogs that this catalog item is associated with.
		 * @catalogs Specify comma-separated list of catalogs that you would like the item to be associated with.
		 */
		setCatalogs(catalogs: String): void;

		/**
		 * Define the categories that this catalog item is associated with.
		 * @categories Specify comma-separated list of categories that you would like the item to be associated with.
		 */
		setCategories(categories: String): void;

		/**
		 * Set the image of a catalog item to a database image record.
		 * @dbImageSysId sys_id of an attachment referencing the db_image.
		 * @type Type can be picture or an icon.
		 */
		setImage(dbImageSysId: String, type: String): void;

		/**
		 * Define the table name for this catalog item.
		 * @tableName Specify the name of the table that extends sc_cat_item.
		 */
		setTableName(tableName: String): void;

		/**
		 * Use to update current catalog item with set values.
		 * @columnValues An object mapping column names to values.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		update(columnValues: Object, standardUpdate: Boolean): void;

	}
	/**
	 * OrderGuide API enables you to initialize and view an order guide details. To use this class in a scoped application, use the sn_sc namespace identifier. The Service Catalog Scoped API plugin (com.glideapp.servicecatalog.scoped.api) that is enabled by default is required to access the OrderGuide API.
    * 
	 */
	declare class OrderGuide {
		/**
		 * Creates an instance of the OrderGuide class with the specified sys_id.
		 * @sys_id sys_id of the OrderGuide.
		 */
		constructor(sys_id: String);

		/**
		 * Returns the sys_id of the order guide.
		 */
		getID(): String;

		/**
		 * Initialises the order guide with the specified catalog items and the variables, and returns the order guide.
		 * @request A JSON object with the Catalog item and variable details.
		 */
		init(request: Map): Map;

		/**
		 * Specifies if the Show Include Toggle (include_items) check box is selected for the specified order guide.
		 */
		isIncludeItems(): Boolean;

		/**
		 * Specifies if the two-step checkout is enabled.
		 */
		isTwoStep(): Boolean;

		/**
		 * Specifies if a separate cart (different from that for catalog items) usage is enabled for a two-step order guide.
		 */
		isUseCustomCart(): Boolean;

		/**
		 * Navigates to the catalog items of an order guide.
		 * @itemDetails A JSON object with details of catalog items in the order guide.
		 */
		navigateFromMap(itemDetails: Map): void;

	}
	/**
	 * VariablePoolQuestionSetJS API enables you to use Variable Pool Question Set. To use this class in a scoped application, use the sn_sc namespace identifier. The Service Catalog Scoped API plugin (com.glideapp.servicecatalog.scoped.api) that is enabled by default is required to access the VariablePoolQuestionSetJS API.
    * 
	 */
	declare class VariablePoolQuestionSetJS {
		/**
		 * Creates an instance of the VariablePoolQuestionSet class.
		 */
		constructor();

		/**
		 * Returns the array of questions associated with the cart item ids specified.
		 */
		getFlatQuestions(): Object;

		/**
		 * Loads the question set.
		 */
		load(): void;

		/**
		 * Sets the cart item ids of the variable pool.
		 * @id  
		 */
		setCartID(id: String): void;

	}
}
declare namespace sn_uc {
	/**
	 * UserCriteria API enables you to create, modify, or delete user criteria records using scripts. To use this class in a scoped application, use the sn_uc namespace identifier. The User Criteria Scoped API plugin (ID: com.glideapp.user_criteria.scoped.api) should be enabled to access the UserCriteria API.
    * 
	 */
	declare class UserCriteria {
		/**
		 * Creates an instance of the UserCriteria class.
		 */
		constructor();

		/**
		 * Creates an instance of the UserCriteria class with the specified sys_id.
		 * @sys_id sys_id of the user criteria.
		 */
		constructor(sys_id: String);

		/**
		 * Creates a user criteria with specified values in the user_criteria table. Values specified in columnValues override the values provided via setters.
		 * @columnValues Key and value pairs for a column and its value.
		 * @standardUpdate Set to true to enable the running of engines and workflow.
		 */
		create(columnValues: Object, standardUpdate: Boolean): String;

		/**
		 * Deletes the current user criteria.
		 */
		deleteRecord(): Boolean;

		/**
		 * Displays the mapping for the attribute and value pairs of the catalog item.
		 * @columns Array of catalog item attributes.
		 */
		read(columns: String): Object;

		/**
		 * Specifies if the user criteria is active.
		 * @active If true, the user criteria is active. If false, the user criteria is inactive.
		 */
		setActive(active: Boolean): void;

		/**
		 * Specifies if the user criteria has an advanced script.
		 * @advanced If true, the user criteria has an advanced script. If false, the user criteria does not have an advanced script.
		 */
		setAdvanced(advanced: Boolean): void;

		/**
		 * Sets the company property for the user criteria.
		 * @companies Comma-separated list of the company sys_ids to be set for the user criteria.
		 */
		setCompanies(companies: String): void;

		/**
		 * Sets the department property for the user criteria.
		 * @departments Comma-separated list of the department sys_ids to be set for the user criteria.
		 */
		setDepartments(departments: String): void;

		/**
		 * Sets the group property for the user criteria.
		 * @groups Comma-separated list of the group sys_ids to be set for the user criteria.
		 */
		setGroups(groups: String): void;

		/**
		 * Sets the location property for the user criteria.
		 * @locations Comma-separated list of the location sys_ids to be set for the user criteria.
		 */
		setLocations(locations: String): void;

		/**
		 * Sets the match_all property for the user criteria.
		 */
		setMatchAll(): void;

		/**
		 * Sets the name property for the user criteria.
		 * @name Name of the user criteria.
		 */
		setName(name: String): void;

		/**
		 * Sets the role property for the user criteria.
		 * @roles Comma-separated list of the role sys_ids to be set for the user criteria.
		 */
		setRoles(roles: String): void;

		/**
		 * Sets the script for the user criteria.
		 * @script Script to be set for the advanced user criteria.
		 */
		setScript(script: String): void;

		/**
		 * Sets the user property for the user criteria.
		 * @users Comma-separated list of the user sys_ids to be set for the user criteria.
		 */
		setUsers(users: String): void;

		/**
		 * Updates the current catalog item with the specified values.
		 * @columnValues Mapping for the column name and the value pairs.
		 * @reason Reason for updating the catalog item.
		 */
		update(columnValues: Object, reason: String): String;

	}
	/**
	 * UserCriteriaLoader API enables you to get the user criteria associated with a specific user, or a user associated with a specific linkTable. To use this class in a scoped application, use the sn_uc namespace identifier. The User Criteria Scoped API plugin (ID: com.glideapp.user_criteria.scoped.api) should be enabled to access the UserCriteriaLoader API.
    * 
	 */
	declare class UserCriteriaLoader {
		/**
		 * Returns all user criteria associated with the logged in user.
		 */
		getAllUserCriteria(): ArrayList;

		/**
		 * Returns all user criteria associated with the specified user.
		 * @userId sys_id of the user.
		 */
		getAllUserCriteria(userId: String): ArrayList;

		/**
		 * Returns the user criteria associated with the specified linkTable for the logged in user.
		 * @linkTable Mtom link table between the record and the Available For or Not Available For User Criteria.
		 */
		getUserCriteria(linkTable: String): ArrayList;

		/**
		 * Returns the user criteria of the specified user and the linkTable.
		 * @userId sys_id of the user.
		 * @linkTable Mtom link table between the record and the Available For or Not Available For User Criteria.
		 */
		getUserCriteria(userId: String, linkTable: String): ArrayList;

	}
}
declare namespace sn_ws {
	/**
	 * A RESTAPIRequest object allows you to access scripted REST API request details in scripts.
    * Note: You cannot instantiate objects of this type. Objects of this type are created automatically and are accessible only in scripted REST API resource scripts.
	 */
	declare class RESTAPIRequest {
		/**
		 * The body of the request.
		 * @body The body of the request. You can access data from the body object using the RESTAPIRequestBody API.
		 */
		body;
		/**
		 * All headers from the request.
		 * @headers All headers from the request, and their values.
		 */
		headers;
		/**
		 * The path parameters passed in the request URI.
		 * @pathParams The path parameters as a script object. Available path parameters depend on the web service configuration.
		 */
		pathParams;
		/**
		 * The query parameters from the web service request.
		 * @queryParams The query parameters from the web service request.
		 */
		queryParams;
		/**
		 * The entire query added to the endpoint URI.
		 * @queryString The entire query for the request.
		 */
		queryString;
		/**
		 * The request URI, excluding domain information.
		 * @uri The request URI, excluding domain information.
		 */
		uri;
		/**
		 * The entire request URL.
		 * @url The entire request URL.
		 */
		url;
		/**
		 * Returns the value of a specific header from the web service request.
		 * @header The name of the header, such as accept or content-type.
		 */
		getHeader(header: String): String;

		/**
		 * Get the content types specified in the request Accept header.
		 */
		getSupportedResponseContentTypes(): Array;

	}
	/**
	 * A RESTAPIRequestBody object allows you to access the body content of a scripted REST API request in scripts.
    * The format of a RESTAPIRequestBody object may be JSON or XML, depending on the content-type header value from the request. Note: You cannot instantiate objects of this type. Objects of this type are created automatically and are accessible only in scripted REST API resource scripts. Single entry example-request-body in JSON format. Multiple entry example-request-body in JSON format. Important: If the request body format is not of a json or xml subtype, use only the request body dataStream field to access the request body. Using request body data, dataString, nextEntry(), or hasNext() with a non-json or non-xml format results in a 500 error response.
	 */
	declare class RESTAPIRequestBody {
		/**
		 * The content of the request body.
		 * @data The request content. This can be a single object or an array of objects depending on the request.
		 */
		data;
		/**
		 * The content of the request body, as a stream.
		 * @dataStream The content of the request body. You can pass the stream to a separate API, such as to create an attachment from the request or forward the request to a different endpoint.
		 */
		dataStream;
		/**
		 * The content of the request body, as a String.
		 * @dataString The content of the request body.
		 */
		dataString;
		/**
		 * Determine if there are additional entries in the request body.
		 */
		hasNext(): boolean;

		/**
		 * Retrieve one entry from the request body as a script object.
		 */
		nextEntry(): Object;

	}
	/**
	 * A RESTAPIResponse object allows you to build a RESTful response to a scripted REST API request.
    * Note: You cannot instantiate objects of this type. Objects of this type are created automatically and are accessible only in scripted REST API resource scripts.
	 */
	declare class RESTAPIResponse {
		/**
		 * Get the ResponseStreamWriter for this response, allowing you to write directly to the response stream.
		 */
		getStreamWriter(): RESTAPIResponseStream;

		/**
		 * Sets the body content to send in the web service response.
		 * @body The response body, as a JavaScript object. The body content is automatically serialized to JSON or XML depending on the value of the Accept header passed in the request.
		 */
		setBody(body: Object): void;

		/**
		 * Assigns a value to the Content-Type header in the web service response.
		 * @contentType The content type of the response body, such as application/json.
		 */
		setContentType(contentType: String): void;

		/**
		 * Configure the response to return an error.
		 * @error An error object.
		 */
		setError(error: Object): void;

		/**
		 * Assign a value to a REST service response header.
		 * @header The header you want to set.
		 * @value The value to assign the specified header.
		 */
		setHeader(header: String, value: String): void;

		/**
		 * Sets the headers for the web service response.
		 * @headers A JavaScript object listing each header and the value to assign that header.
		 */
		setHeaders(headers: Object): void;

		/**
		 * Assigns a value to the Location header in the web service response.
		 */
		setLocation(): void;

		/**
		 * Sets the status code number for the web service response.
		 * @status The status code to send in the response, such as 200 to indicate success. Passing a non-numerical value, such as a string, causes the status code to default to 0.
		 */
		setStatus(status: Number): void;

	}
	/**
	 * A RESTAPIResponseStream object allows you to write directly to the scripted REST API response stream.
    * Use RESTAPIResponseStream methods to build web service APIs in the Scripted REST APIs feature. Note: You cannot instantiate objects of this type. Objects of this type are created automatically and are accessible only in scripted REST API resource scripts.
	 */
	declare class RESTAPIResponseStream {
		/**
		 * Write an input stream to the response stream.
		 * @stream An attachment or a response stream from a third-party service.
		 */
		writeStream(stream: Object): void;

		/**
		 * Write string data to the response stream.
		 * @data The string to add to the response data.
		 */
		writeString(data: String): void;

	}
	/**
	 * The RESTMessageV2 API allows you to send outbound REST messages using JavaScript.
    * Use the RESTResponseV2 API to manage the response returned by the REST provider. You can use this API in scoped applications, or within the global scope.
	 */
	declare class RESTMessageV2 {
		/**
		 * Instantiates an empty RESTMessageV2 object.
		 */
		constructor();

		/**
		 * Instantiates a RESTMessageV2 object using information from a REST message record.
		 * @name The name of the REST message record.
		 * @methodName The name of the HTTP method to use, such as GET or PUT.
		 */
		constructor(name: String, methodName: String);

		/**
		 * Send the REST message to the endpoint.
		 */
		execute(): RESTResponse;

		/**
		 * Send the REST message to the endpoint asynchronously. The instance does not wait for a response from the web service provider when making asynchronous calls.
		 */
		executeAsync(): RESTResponse;

		/**
		 * Get the URL of the endpoint for the REST message.
		 */
		getEndpoint(): String;

		/**
		 * Get the content of the REST message body.
		 */
		getRequestBody(): String;

		/**
		 * Get the value for an HTTP header specified in the REST message.
		 * @headerName The request header you want to get the value for.
		 */
		getRequestHeader(headerName: String): String;

		/**
		 * Get HTTP headers that were set by the REST client and the associated values.
		 */
		getRequestHeaders(): Object;

		/**
		 * Configures the REST message to save the returned response body as an attachment record.
		 * @tableName Specify the table that contains the record you want to attach the saved file to.
		 * @recordSysId Specify the sys_id of the record you want to attach the saved file to.
		 * @fileName Specify the file name to give to the saved file.
		 */
		saveResponseBodyAsAttachment(tableName: String, recordSysId: String, fileName: String): void;

		/**
		 * Configure the REST message to save the returned response body as an encrypted attachment record.
		 * @tableName Specify the table that contains the record you want to attach the saved file to.
		 * @recordSysId Specify the sys_id of the record you want to attach the saved file to.
		 * @fileName Specify the file name to give to the saved file.
		 * @encryptContext Specify the sys_id of an encryption context. The saved file is encrypted using this context.
		 */
		saveResponseBodyAsAttachment(tableName: String, recordSysId: String, fileName: String, encryptContext: String): void;

		/**
		 * Set the credentials for the REST message using an existing basic auth or OAuth 2.0 profile.
		 * @type The type of authentication profile to use. Valid values are 'basic' to use basic authentication, or 'oauth2' to use OAuth 2.0.
		 * @profileId The sys_id of an authentication profile record. When using basic auth, specify the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record. When using OAuth 2.0, specify the sys_id of a OAuth Entity Profile [oauth_entity_profile] record.
		 */
		setAuthenticationProfile(type: String, profileId: String): void;

		/**
		 * Sets basic authentication headers for the REST message.
		 * @userName The username you want to use to authenticate the REST message.
		 * @userPass The password for the specified user.
		 */
		setBasicAuth(userName: String, userPass: String): void;

		/**
		 * Associate outbound requests and the resulting response record in the ECC queue. This method only applies to REST messages sent through a MID Server.
		 * @correlator A unique identifier
		 */
		setEccCorrelator(correlator: String): void;

		/**
		 * Override a value from the database by writing to the REST message payload. This method only applies to REST messages sent through a MID Server.
		 * @name The name of the parameter, such as source.
		 * @value The value to assign to the specified parameter.
		 */
		setEccParameter(name: String, value: String): void;

		/**
		 * Set the endpoint for the REST message.
		 * @endpoint The URL of the REST provider you want to interface with.
		 */
		setEndpoint(endpoint: String): void;

		/**
		 * The HTTP method this REST message performs, such as GET or PUT.
		 * @method The HTTP method to perform.
		 */
		setHttpMethod(method: String): void;

		/**
		 * Set the amount of time the REST message waits for a response from the web service provider before the request times out.
		 * @timeoutMs The amount of time, in milliseconds, before the call to the REST provider times out.
		 */
		setHttpTimeout(timeoutMs: Number): void;

		/**
		 * Set the log level for this message and the corresponding response.
		 * @level The log level. Valid values are basic, elevated, and all.
		 */
		setLogLevel(level: String): void;

		/**
		 * Configure the REST message to communicate through a MID Server.
		 * @midServer The name of the MID Server to use. Your instance must have an active MID Server with the specified name.
		 */
		setMIDServer(midServer: String): void;

		/**
		 * Set the mutual authentication protocol profile for the REST message.
		 * @profileName The Name of the protocol profile to use for mutual authentication.
		 */
		setMutualAuth(profileName: String): void;

		/**
		 * Append a parameter to the end of the request URL with the form name=value.
		 * @name The name of the URL parameter to pass.
		 * @value The value to assign the URL parameter.
		 */
		setQueryParameter(name: String, value: String): void;

		/**
		 * Set the body content to send to the web service provider when using PUT or POST HTTP methods.
		 * @body The request body to send.
		 */
		setRequestBody(body: String): void;

		/**
		 * Sets the request body using an existing attachment record.
		 * @attachmentSysId The sys_id of the Attachment [sys_attachment] record you want to send in this REST message.
		 */
		setRequestBodyFromAttachment(attachmentSysId: String): void;

		/**
		 * Set the body content of a PUT or POST message using a binary stream.
		 * @stream The binary data to send, such as an attachment or a stream from a 3rd-party service.
		 */
		setRequestBodyFromStream(stream: Object): void;

		/**
		 * Set an HTTP header in the REST message to the specified value.
		 * @name The name of the header.
		 * @value The value to assign to the specified header.
		 */
		setRequestHeader(name: String, value: String): void;

		/**
		 * Override the default requestor profile for the REST message in order to retrieve an OAuth access token associated with a different requestor.
		 * @requestorContext  
		 * @requestorId  
		 */
		setRequestorProfile(requestorContext: String, requestorId: String): void;

		/**
		 * Set a REST message function variable with the specified name from the REST message record to the specified value.
		 * @name The name of the REST message variable. This parameter must be defined in the REST message record before you can assign a value to it.
		 * @value The value to assign the variable.
		 */
		setStringParameter(name: String, value: String): void;

		/**
		 * Set a REST message function variable with the specified name from the REST message record to the specified value.
		 * @name The name of the REST message variable. This parameter must be defined in the REST message record before you can assign a value to it.
		 * @value The value to assign the variable.
		 */
		setStringParameterNoEscape(name: String, value: String): void;

	}
	/**
	 * The RESTResponseV2 API allows you to use the data returned by an outbound REST message in JavaScript code.
    * A RESTResponseV2 object is returned by the RESTMessageV2 functions execute() and executeAsync(). You can use this API in scoped applications, or within the global scope.
	 */
	declare class RESTResponseV2 {
		/**
		 * Return all headers contained in the response, including any duplicate headers.
		 */
		getAllHeaders(): List;

		/**
		 * Get the content of the REST response body.
		 */
		getBody(): String;

		/**
		 * Returns all cookies included in the response.
		 */
		getCookies(): Object;

		/**
		 * Get the numeric error code if there was an error during the REST transaction.
		 */
		getErrorCode(): Number;

		/**
		 * Get the error message if there was an error during the REST transaction.
		 */
		getErrorMessage(): String;

		/**
		 * Get the value for a specified header.
		 * @name The name of the header that you want the value for, such as Set-Cookie.
		 */
		getHeader(name: String): String;

		/**
		 * Get all headers returned in the REST response and the associated values.
		 */
		getHeaders(): Object;

		/**
		 * Get the fully-resolved query sent to the REST endpoint..
		 */
		getQueryString(): String;

		/**
		 * Get the sys_id value of the attachment created from the response body content.
		 */
		getResponseAttachmentSysid(): String;

		/**
		 * Get the numeric HTTP status code returned by the REST provider.
		 */
		getStatusCode(): Number;

		/**
		 * Indicate if there was an error during the REST transaction.
		 */
		haveError(): boolean;

		/**
		 * Set the amount of time the instance waits for a response from the web service provider.
		 * @timeoutSecs The amount of time, in seconds, to wait for this response.
		 */
		waitForResponse(timeoutSecs: Number): void;

	}
	/**
	 * The SOAPMessageV2 API allows you to send an outbound SOAP message using JavaScript.
    * Use the SOAPResponseV2 API to manage the response returned by the SOAP provider. You can use this API in scoped applications, or within the global scope.
	 */
	declare class SOAPMessageV2 {
		/**
		 * Instantiates an empty SOAPMessageV2 object.
		 */
		constructor();

		/**
		 * Instantiate a SOAPMessageV2 object from a SOAP message record and a function associated with that record.
		 * @soapMessage The SOAP message record you want to use as the base for this object.
		 * @soapFunction The SOAP function you want to execute. Available SOAP functions depend on the WSDL supplied by the web service provider.
		 */
		constructor(soapMessage: String, soapFunction: String);

		/**
		 * Send the SOAP message to the endpoint.
		 */
		execute(): SOAPResponseV2;

		/**
		 * Send the SOAP message to the ECC queue.
		 */
		executeAsync(): SOAPResponseV2;

		/**
		 * Get the endpoint for the SOAP message.
		 */
		getEndpoint(): String;

		/**
		 * Get the content of the SOAP message body.
		 */
		getRequestBody(): String;

		/**
		 * Get the value for an HTTP header specified by the SOAP client.
		 * @headerName The request header you want to get the value for.
		 */
		getRequestHeader(headerName: String): String;

		/**
		 * Get HTTP headers that were set by the SOAP client and the associated values.
		 */
		getRequestHeaders(): Object;

		/**
		 * Set basic authentication headers for the SOAP message.
		 * @userName The username to use when authenticating the SOAP message.
		 * @userPass The password for the specified user.
		 */
		setBasicAuth(userName: String, userPass: String): void;

		/**
		 * Associate outbound requests and the resulting response record in the ECC queue.
		 * @correlator A unique identifier.
		 */
		setEccCorrelator(correlator: String): void;

		/**
		 * Override a value from the database by writing to the SOAP message payload.
		 * @name The name of the ECC parameter.
		 * @value The value to assign to the specified ECC parameter.
		 */
		setEccParameter(name: String, value: String): void;

		/**
		 * Set the endpoint for the SOAP message.
		 * @endpoint The URL of the SOAP web service provider you want to interface with.
		 */
		setEndpoint(endpoint: String): void;

		/**
		 * Set the amount of time the SOAP message waits for a response from the web service provider before the request times out.
		 * @timeoutMs The amount of time to wait for a response from the web service provider, in milliseconds.
		 */
		setHttpTimeout(timeoutMs: Number): void;

		/**
		 * Sets the log level for this message and the corresponding response.
		 * @level The log level. Valid values are basic, elevated, and all.
		 */
		setLogLevel(level: String): void;

		/**
		 * Configure the SOAP message to be sent through a MID Server.
		 * @midServerName The name of the MID Server you want to send the SOAP message through. Your instance must have an active MID Server with the specified name.
		 */
		setMIDServer(midServerName: String): void;

		/**
		 * Set the mutual authentication protocol profile for the SOAP message.
		 * @profileName The name of the protocol profile to use for mutual authentication.
		 */
		setMutualAuth(profileName: String): void;

		/**
		 * Set the body content to send to the web service provider.
		 * @requestBody The body of the SOAP message.
		 */
		setRequestBody(requestBody: String): void;

		/**
		 * Set an HTTP header in the SOAP message to the specified value.
		 * @headerName The name of the header.
		 * @headerValue The value to assign to the specified header.
		 */
		setRequestHeader(headerName: String, headerValue: String): void;

		/**
		 * Define the SOAP action this SOAP message performs.
		 * @soapAction The SOAP action this SOAP message performs.
		 */
		setSOAPAction(soapAction: String): void;

		/**
		 * Set a variable with the specified name from the SOAP message record to the specified value.
		 * @name The name of the SOAP message variable.
		 * @value The value to assign to the specified variable.
		 */
		setStringParameter(name: String, value: String): void;

		/**
		 * Set a variable with the specified name from the SOAP message record to the specified value.
		 * @name The name of the SOAP message variable.
		 * @value The value to assign to the specified variable.
		 */
		setStringParameterNoEscape(name: String, value: String): void;

		/**
		 * Sets web service security values for the SOAP message.
		 * @keystoreId The sys_id of the Java or PKCS12 key store to use.
		 * @keystoreAlias The alias that identifies the public and private keys.
		 * @keystorePassword The password assigned to the key store record.
		 * @certificateId The sys_id of the trusted server certificate.
		 */
		setWSSecurity(keystoreId: String, keystoreAlias: String, keystorePassword: String, certificateId: String): void;

	}
	/**
	 * The SOAPResponseV2 API allows you to use the data returned by an outbound SOAP message in JavaScript code.
    * A SOAPResponseV2 object is returned by the SOAPMessageV2 functions execute() and executeAsync(). You can use this API in scoped applications, or within the global scope.
	 */
	declare class SOAPResponseV2 {
		/**
		 * Returns all headers contained in the response, including any duplicate headers.
		 */
		getAllHeaders(): List;

		/**
		 * Get the content of the SOAP response body.
		 */
		getBody(): String;

		/**
		 * Returns all cookies included in the response.
		 */
		getCookies(): Object;

		/**
		 * Get the numeric error code if there was an error during the SOAP transaction.
		 */
		getErrorCode(): Number;

		/**
		 * Get the error message if there was an error during the SOAP transaction.
		 */
		getErrorMessage(): String;

		/**
		 * Get the value for a specified HTTP header.
		 * @name The name of the header that you want the value for, such as Set-Cookie.
		 */
		getHeader(name: String): String;

		/**
		 * Get all HTTP headers returned in the SOAP response and the associated values.
		 */
		getHeaders(): Object;

		/**
		 * Get the numeric HTTP status code returned by the SOAP provider.
		 */
		getStatusCode(): Number;

		/**
		 * Indicate if there was an error during the SOAP transaction.
		 */
		haveError(): boolean;

		/**
		 * Set the amount of time the instance waits for a response from the web service provider.
		 * @timeoutSecs The amount of time, in seconds, to wait for this response.
		 */
		waitForResponse(timeoutSecs: Number): void;

	}
}

declare const gs: GlideSystem;
